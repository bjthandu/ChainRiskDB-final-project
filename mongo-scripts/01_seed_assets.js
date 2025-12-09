// 01_seed_assets.js
// Seed reference crypto assets for ChainRiskDB.

use("ChainRiskDB");

db.assets.insertMany([
  {
    _id: ObjectId("676000000000000000000001"),
    symbol: "BTC",
    name: "Bitcoin",
    asset_type: "crypto",
    max_supply: 21000000,
    metadata: {
      launch_year: 2009,
      typical_volatility: "high"
    }
  },
  {
    _id: ObjectId("676000000000000000000002"),
    symbol: "ETH",
    name: "Ethereum",
    asset_type: "crypto",
    max_supply: null,
    metadata: {
      launch_year: 2015,
      typical_volatility: "high"
    }
  }
]);
