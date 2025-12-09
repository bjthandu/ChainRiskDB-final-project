// 05_seed_liquidations.js
// Seed historical liquidation events for BTC/ETH.

use("ChainRiskDB");

db.liquidations.insertMany([
  // Base BTC events
  {
    _id: ObjectId("676000000000000000004001"),
    symbol: "BTC",
    exchange: "ExchangeX",
    wallet_address: "0xSOMEWALLET",
    side: "long",
    quantity: 10,
    liquidation_price: 55000,
    realized_loss_usd: 50000,
    event_time: ISODate("2025-11-18T03:15:00Z")
  },
  {
    _id: ObjectId("676000000000000000004002"),
    symbol: "BTC",
    exchange: "ExchangeY",
    wallet_address: "0xSOMEOTHER",
    side: "short",
    quantity: 5,
    liquidation_price: 61000,
    realized_loss_usd: 25000,
    event_time: ISODate("2025-11-18T03:17:00Z")
  },

  // Additional wallet-linked events
  {
    symbol: "BTC",
    exchange: "Bybit",
    wallet_address: "0xWHALE011", // FlashLoan AI Bot
    side: "long",
    quantity: 3,
    liquidation_price: 55500,
    realized_loss_usd: 15000,
    event_time: ISODate("2025-11-19T04:20:00Z")
  },
  {
    symbol: "ETH",
    exchange: "Kucoin",
    wallet_address: "0xWHALE008", // ArbBot-22
    side: "long",
    quantity: 100,
    liquidation_price: 2950,
    realized_loss_usd: 50000,
    event_time: ISODate("2025-11-18T14:50:00Z")
  },
  {
    symbol: "BTC",
    exchange: "OKX",
    wallet_address: "0xWHALE007", // Retail Cluster 21
    side: "short",
    quantity: 8,
    liquidation_price: 62000,
    realized_loss_usd: 25000,
    event_time: ISODate("2025-11-17T06:00:00Z")
  },
  {
    symbol: "BTC",
    exchange: "BinanceFutures",
    wallet_address: "0xWHALE009", // DAO Treasury Alpha
    side: "short",
    quantity: 120,
    liquidation_price: 64500,
    realized_loss_usd: 90000,
    event_time: ISODate("2025-11-18T02:40:00Z")
  },
  {
    symbol: "ETH",
    exchange: "Bybit",
    wallet_address: "0xWHALE010", // YieldFarm Pro
    side: "long",
    quantity: 50,
    liquidation_price: 2800,
    realized_loss_usd: 25000,
    event_time: ISODate("2025-11-17T23:00:00Z")
  },
  {
    symbol: "BTC",
    exchange: "ExchangeZ",
    wallet_address: "0xWHALE003", // Retail Mega-Whale
    side: "short",
    quantity: 10,
    liquidation_price: 63500,
    realized_loss_usd: 18000,
    event_time: ISODate("2025-11-18T07:30:00Z")
  }
]);
