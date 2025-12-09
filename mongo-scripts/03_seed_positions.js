use("ChainRiskDB");

db.positions.insertMany([
  // --- Fund Alpha (0xWHALE001) ---
  {
    _id: ObjectId("676000000000000000002001"),
    wallet_id: ObjectId("676000000000000000001001"),
    wallet_address: "0xWHALE001",
    exchange: "ExchangeX",
    symbol: "BTC",
    side: "long",
    quantity: 150,
    entry_price: 60000,
    liquidation_price: 52000,
    leverage: 10,
    margin_mode: "cross",
    created_at: ISODate("2025-11-10T12:00:00Z"),
    last_updated: ISODate("2025-11-20T12:00:00Z")
  },
  {
    _id: ObjectId("676000000000000000002002"),
    wallet_id: ObjectId("676000000000000000001001"),
    wallet_address: "0xWHALE001",
    exchange: "ExchangeX",
    symbol: "ETH",
    side: "long",
    quantity: 3000,
    entry_price: 3200,
    liquidation_price: 2600,
    leverage: 8,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-10T12:30:00Z"),
    last_updated: ISODate("2025-11-20T12:30:00Z")
  },
  {
    wallet_id: ObjectId("676000000000000000001001"),
    wallet_address: "0xWHALE001",
    exchange: "ExchangeX",
    symbol: "BTC",
    side: "long",
    quantity: 80,
    entry_price: 59500,
    liquidation_price: 53000,
    leverage: 12,
    margin_mode: "cross",
    created_at: ISODate("2025-11-15T10:00:00Z"),
    last_updated: ISODate("2025-11-20T10:00:00Z")
  },
  {
    wallet_id: ObjectId("676000000000000000001001"),
    wallet_address: "0xWHALE001",
    exchange: "ExchangeX",
    symbol: "ETH",
    side: "short",
    quantity: 1500,
    entry_price: 3150,
    liquidation_price: 3450,
    leverage: 6,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-16T11:30:00Z"),
    last_updated: ISODate("2025-11-20T11:30:00Z")
  },

  // --- Exchange Internal (0xWHALE002) ---
  {
    wallet_id: ObjectId("676000000000000000001002"),
    wallet_address: "0xWHALE002",
    exchange: "ExchangeInternal",
    symbol: "BTC",
    side: "short",
    quantity: 400,
    entry_price: 58200,
    liquidation_price: 65000,
    leverage: 2,
    margin_mode: "cross",
    created_at: ISODate("2025-11-10T09:00:00Z"),
    last_updated: ISODate("2025-11-20T09:00:00Z")
  },
  {
    wallet_id: ObjectId("676000000000000000001002"),
    wallet_address: "0xWHALE002",
    exchange: "ExchangeInternal",
    symbol: "ETH",
    side: "long",
    quantity: 2500,
    entry_price: 3050,
    liquidation_price: 2500,
    leverage: 3,
    margin_mode: "cross",
    created_at: ISODate("2025-11-11T10:15:00Z"),
    last_updated: ISODate("2025-11-20T10:15:00Z")
  },

  // --- Retail Mega-Whale (0xWHALE003) ---
  {
    _id: ObjectId("676000000000000000002003"),
    wallet_id: ObjectId("676000000000000000001003"),
    wallet_address: "0xWHALE003",
    exchange: "ExchangeY",
    symbol: "BTC",
    side: "long",
    quantity: 50,
    entry_price: 62000,
    liquidation_price: 54000,
    leverage: 15,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-12T09:00:00Z"),
    last_updated: ISODate("2025-11-20T09:00:00Z")
  },
  {
    _id: ObjectId("676000000000000000002004"),
    wallet_id: ObjectId("676000000000000000001003"),
    wallet_address: "0xWHALE003",
    exchange: "ExchangeZ",
    symbol: "BTC",
    side: "short",
    quantity: 20,
    entry_price: 58000,
    liquidation_price: 64000,
    leverage: 12,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-13T10:00:00Z"),
    last_updated: ISODate("2025-11-20T10:00:00Z")
  },
  {
    wallet_id: ObjectId("676000000000000000001003"),
    wallet_address: "0xWHALE003",
    exchange: "ExchangeY",
    symbol: "BTC",
    side: "long",
    quantity: 25,
    entry_price: 61000,
    liquidation_price: 54500,
    leverage: 18,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-14T13:00:00Z"),
    last_updated: ISODate("2025-11-20T13:00:00Z")
  },
  {
    wallet_id: ObjectId("676000000000000000001003"),
    wallet_address: "0xWHALE003",
    exchange: "ExchangeZ",
    symbol: "ETH",
    side: "long",
    quantity: 300,
    entry_price: 3120,
    liquidation_price: 2800,
    leverage: 10,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-15T16:30:00Z"),
    last_updated: ISODate("2025-11-20T16:30:00Z")
  },

  // --- Dragon Capital (0xWHALE004) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de666"),
    wallet_address: "0xWHALE004",
    exchange: "ExchangeX",
    symbol: "BTC",
    side: "short",
    quantity: 80,
    entry_price: 59000,
    liquidation_price: 63000,
    leverage: 5,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-05T10:00:00Z"),
    last_updated: ISODate("2025-11-20T10:00:00Z")
  },

  // --- Binance Hot Wallet (0xWHALE005) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de667"),
    wallet_address: "0xWHALE005",
    exchange: "BinanceFutures",
    symbol: "BTC",
    side: "long",
    quantity: 300,
    entry_price: 58000,
    liquidation_price: 49000,
    leverage: 3,
    margin_mode: "cross",
    created_at: ISODate("2025-11-11T08:30:00Z"),
    last_updated: ISODate("2025-11-20T08:30:00Z")
  },

  // --- Kraken Cold Vault (0xWHALE006) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de668"),
    wallet_address: "0xWHALE006",
    exchange: "Kraken",
    symbol: "BTC",
    side: "long",
    quantity: 50,
    entry_price: 57500,
    liquidation_price: 43000,
    leverage: 1,
    margin_mode: "cross",
    created_at: ISODate("2025-11-01T08:00:00Z"),
    last_updated: ISODate("2025-11-20T08:00:00Z")
  },

  // --- Retail Cluster 21 (0xWHALE007) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de669"),
    wallet_address: "0xWHALE007",
    exchange: "OKX",
    symbol: "BTC",
    side: "short",
    quantity: 15,
    entry_price: 60000,
    liquidation_price: 63000,
    leverage: 8,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-12T07:30:00Z"),
    last_updated: ISODate("2025-11-20T07:30:00Z")
  },

  // --- ArbBot-22 (0xWHALE008) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66a"),
    wallet_address: "0xWHALE008",
    exchange: "Kucoin",
    symbol: "ETH",
    side: "long",
    quantity: 1200,
    entry_price: 3100,
    liquidation_price: 2900,
    leverage: 15,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-14T15:00:00Z"),
    last_updated: ISODate("2025-11-20T15:00:00Z")
  },

  // --- DAO Treasury Alpha (0xWHALE009) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66b"),
    wallet_address: "0xWHALE009",
    exchange: "BinanceFutures",
    symbol: "BTC",
    side: "short",
    quantity: 500,
    entry_price: 58500,
    liquidation_price: 65000,
    leverage: 2,
    margin_mode: "cross",
    created_at: ISODate("2025-11-09T11:15:00Z"),
    last_updated: ISODate("2025-11-20T11:15:00Z")
  },

  // --- YieldFarm Pro (0xWHALE010) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66c"),
    wallet_address: "0xWHALE010",
    exchange: "Huobi",
    symbol: "BTC",
    side: "long",
    quantity: 15,
    entry_price: 59500,
    liquidation_price: 56500,
    leverage: 30,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-12T13:45:00Z"),
    last_updated: ISODate("2025-11-20T13:45:00Z")
  },

  // --- FlashLoan AI Bot (0xWHALE011) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66d"),
    wallet_address: "0xWHALE011",
    exchange: "Bybit",
    symbol: "BTC",
    side: "long",
    quantity: 20,
    entry_price: 60000,
    liquidation_price: 55000,
    leverage: 50,
    margin_mode: "isolated",
    created_at: ISODate("2025-11-17T12:00:00Z"),
    last_updated: ISODate("2025-11-20T12:00:00Z")
  },

  // --- Institutional Desk A (0xWHALE012) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66e"),
    wallet_address: "0xWHALE012",
    exchange: "CME_Futures",
    symbol: "BTC",
    side: "short",
    quantity: 250,
    entry_price: 57800,
    liquidation_price: 64000,
    leverage: 4,
    margin_mode: "cross",
    created_at: ISODate("2025-11-06T09:20:00Z"),
    last_updated: ISODate("2025-11-20T09:20:00Z")
  },

  // --- Mega Retailer 918 (0xWHALE013) ---
  {
    wallet_id: ObjectId("69376ed275573b9a098de66f"),
    wallet_address: "0xWHALE013",
    exchange: "OKX",
    symbol: "ETH",
    side: "long",
    quantity: 200,
    entry_price: 3050,
    liquidation_price: 2600,
    leverage: 4,
    margin_mode: "cross",
    created_at: ISODate("2025-11-08T09:00:00Z"),
    last_updated: ISODate("2025-11-20T09:00:00Z")
  }
]);
