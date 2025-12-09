// 04_seed_price_snapshots.js
// Seed simplified BTC/ETH time-series price snapshots.

use("ChainRiskDB");

db.price_snapshots.insertMany([
  {
    _id: ObjectId("676000000000000000003001"),
    symbol: "BTC",
    timestamp: ISODate("2025-11-20T10:00:00Z"),
    price_usd: 57850
  },
  {
    _id: ObjectId("676000000000000000003002"),
    symbol: "BTC",
    timestamp: ISODate("2025-11-20T11:00:00Z"),
    price_usd: 57920
  },
  {
    _id: ObjectId("676000000000000000003003"),
    symbol: "BTC",
    timestamp: ISODate("2025-11-20T12:00:00Z"),
    price_usd: 58000
  },
  {
    _id: ObjectId("676000000000000000003004"),
    symbol: "BTC",
    timestamp: ISODate("2025-11-20T13:00:00Z"),
    price_usd: 58100
  },
  {
    _id: ObjectId("676000000000000000003005"),
    symbol: "ETH",
    timestamp: ISODate("2025-11-20T10:00:00Z"),
    price_usd: 3090
  },
  {
    _id: ObjectId("676000000000000000003006"),
    symbol: "ETH",
    timestamp: ISODate("2025-11-20T11:00:00Z"),
    price_usd: 3095
  },
  {
    _id: ObjectId("676000000000000000003007"),
    symbol: "ETH",
    timestamp: ISODate("2025-11-20T12:00:00Z"),
    price_usd: 3100
  },
  {
    _id: ObjectId("676000000000000000003008"),
    symbol: "ETH",
    timestamp: ISODate("2025-11-20T13:00:00Z"),
    price_usd: 3110
  }
]);
