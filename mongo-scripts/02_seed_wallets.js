// 02_seed_wallets.js
// Seed tracked wallets (whales, exchanges, funds, bots, retail).

use("ChainRiskDB");

db.wallets.insertMany([
  {
    _id: ObjectId("676000000000000000001001"),
    address: "0xWHALE001",
    owner_label: "Fund Alpha",
    tags: ["whale", "hedge_fund"],
    risk_flag: "high_leverage",
    created_at: ISODate("2024-01-01T00:00:00Z")
  },
  {
    _id: ObjectId("676000000000000000001002"),
    address: "0xWHALE002",
    owner_label: "Exchange Internal",
    tags: ["exchange_cold_wallet"],
    risk_flag: "low",
    created_at: ISODate("2023-08-15T00:00:00Z")
  },
  {
    _id: ObjectId("676000000000000000001003"),
    address: "0xWHALE003",
    owner_label: "Retail Mega-Whale",
    tags: ["whale", "retail"],
    risk_flag: "medium",
    created_at: ISODate("2024-03-10T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de666"),
    address: "0xWHALE004",
    owner_label: "Dragon Capital",
    tags: ["whale", "fund"],
    risk_flag: "medium",
    created_at: ISODate("2024-07-15T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de667"),
    address: "0xWHALE005",
    owner_label: "Binance Hot Wallet",
    tags: ["exchange_hot_wallet"],
    risk_flag: "low",
    created_at: ISODate("2023-05-10T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de668"),
    address: "0xWHALE006",
    owner_label: "Kraken Cold Vault",
    tags: ["exchange_cold_wallet"],
    risk_flag: "very_low",
    created_at: ISODate("2023-03-18T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de669"),
    address: "0xWHALE007",
    owner_label: "Retail Cluster 21",
    tags: ["retail"],
    risk_flag: "medium",
    created_at: ISODate("2024-01-22T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66a"),
    address: "0xWHALE008",
    owner_label: "ArbBot-22",
    tags: ["bot", "quant"],
    risk_flag: "high",
    created_at: ISODate("2025-02-15T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66b"),
    address: "0xWHALE009",
    owner_label: "DAO Treasury Alpha",
    tags: ["dao", "treasury"],
    risk_flag: "low",
    created_at: ISODate("2023-11-11T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66c"),
    address: "0xWHALE010",
    owner_label: "YieldFarm Pro",
    tags: ["defi", "farmer"],
    risk_flag: "high",
    created_at: ISODate("2024-10-03T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66d"),
    address: "0xWHALE011",
    owner_label: "FlashLoan AI Bot",
    tags: ["bot", "flashloan"],
    risk_flag: "very_high",
    created_at: ISODate("2025-01-05T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66e"),
    address: "0xWHALE012",
    owner_label: "Institutional Desk A",
    tags: ["institutional"],
    risk_flag: "low",
    created_at: ISODate("2023-06-25T00:00:00Z")
  },
  {
    _id: ObjectId("69376ed275573b9a098de66f"),
    address: "0xWHALE013",
    owner_label: "Mega Retailer 918",
    tags: ["retail"],
    risk_flag: "medium",
    created_at: ISODate("2024-12-01T00:00:00Z")
  }
]);
