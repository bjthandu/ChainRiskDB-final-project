
use("ChainRiskDB");

// ---------------------------------------------------------------------------
// Helper: get latest BTC price
// ---------------------------------------------------------------------------

const latestBtc = db.price_snapshots
  .find({ symbol: "BTC" })
  .sort({ timestamp: -1 })
  .limit(1)
  .toArray()[0];

const currentPrice = latestBtc ? latestBtc.price_usd : 58000;

// ---------------------------------------------------------------------------
// 1) BTC stress test by exchange
//    Scenario: simulate BTC price drop to a given level and compute at-risk
//    leverage per exchange.
// ---------------------------------------------------------------------------

const scenarioPrice = 54000;

print("BTC stress test at price:", scenarioPrice);

db.positions.aggregate([
  { $match: { symbol: "BTC" } },
  {
    $addFields: {
      at_risk: {
        $cond: [
          {
            $or: [
              { $and: [ { $eq: ["$side", "long"] },  { $gte: ["$liquidation_price", scenarioPrice] } ] },
              { $and: [ { $eq: ["$side", "short"] }, { $lte: ["$liquidation_price", scenarioPrice] } ] }
            ]
          },
          true,
          false
        ]
      }
    }
  },
  { $match: { at_risk: true } },
  {
    $group: {
      _id: "$exchange",
      total_quantity_btc: { $sum: "$quantity" },
      total_notional_usd: { $sum: { $multiply: ["$quantity", scenarioPrice] } },
      positions_count: { $sum: 1 }
    }
  },
  { $sort: { total_notional_usd: -1 } }
]).forEach(doc => printjson(doc));

// ---------------------------------------------------------------------------
// 2) Top 5 BTC positions closest to liquidation (risky positions)
// ---------------------------------------------------------------------------

print("\nTop 5 BTC positions closest to liquidation (by absolute gap):");

db.positions.aggregate([
  { $match: { symbol: "BTC" } },
  {
    $addFields: {
      liquidation_gap_abs: {
        $abs: { $subtract: ["$liquidation_price", currentPrice] }
      }
    }
  },
  {
    $lookup: {
      from: "wallets",
      localField: "wallet_id",
      foreignField: "_id",
      as: "wallet"
    }
  },
  { $unwind: "$wallet" },
  {
    $project: {
      _id: 0,
      exchange: 1,
      side: 1,
      quantity: 1,
      entry_price: 1,
      liquidation_price: 1,
      liquidation_gap_abs: 1,
      current_price: currentPrice,
      wallet_address: "$wallet.address",
      owner_label: "$wallet.owner_label",
      risk_flag: "$wallet.risk_flag"
    }
  },
  { $sort: { liquidation_gap_abs: 1 } },
  { $limit: 5 }
]).forEach(doc => printjson(doc));

// ---------------------------------------------------------------------------
// 3) BTC leverage concentration by wallet
// ---------------------------------------------------------------------------

print("\nBTC leverage concentration by wallet (share of notional):");

db.positions.aggregate([
  { $match: { symbol: "BTC" } },
  {
    $group: {
      _id: "$wallet_id",
      total_btc: { $sum: "$quantity" }
    }
  },
  {
    $addFields: {
      notional_usd: { $multiply: ["$total_btc", currentPrice] }
    }
  },
  { $sort: { notional_usd: -1 } },
  {
    $lookup: {
      from: "wallets",
      localField: "_id",
      foreignField: "_id",
      as: "wallet"
    }
  },
  { $unwind: "$wallet" },
  {
    $group: {
      _id: null,
      wallets: {
        $push: {
          wallet_address: "$wallet.address",
          owner_label: "$wallet.owner_label",
          total_btc: "$total_btc",
          notional_usd: "$notional_usd"
        }
      },
      grand_total_usd: { $sum: "$notional_usd" }
    }
  },
  { $unwind: "$wallets" },
  {
    $project: {
      _id: 0,
      wallet_address: "$wallets.wallet_address",
      owner_label: "$wallets.owner_label",
      total_btc: "$wallets.total_btc",
      notional_usd: "$wallets.notional_usd",
      share_pct: {
        $multiply: [
          { $divide: ["$wallets.notional_usd", "$grand_total_usd"] },
          100
        ]
      }
    }
  },
  { $sort: { share_pct: -1 } }
]).forEach(doc => printjson(doc));

// ---------------------------------------------------------------------------
// 4) BTC liquidation spikes by hour and exchange
// ---------------------------------------------------------------------------

print("\nBTC liquidation spikes by hour and exchange:");

db.liquidations.aggregate([
  { $match: { symbol: "BTC" } },
  {
    $group: {
      _id: {
        hour: { $dateTrunc: { date: "$event_time", unit: "hour" } },
        exchange: "$exchange"
      },
      total_liq_usd: { $sum: "$realized_loss_usd" },
      events_count: { $sum: 1 }
    }
  },
  { $sort: { "_id.hour": 1, total_liq_usd: -1 } }
]).forEach(doc => printjson(doc));
