// 06_create_indexes.js
// Create indexes to support common query patterns.

use("ChainRiskDB");

// Positions indexed by symbol + exchange for stress tests and scans.
db.positions.createIndex({ symbol: 1, exchange: 1 });

// Positions by wallet to inspect per-entity risk.
db.positions.createIndex({ wallet_id: 1 });

// Time-series pricing by symbol + timestamp.
db.price_snapshots.createIndex({ symbol: 1, timestamp: -1 });

// Liquidations by symbol and time for spike analysis.
db.liquidations.createIndex({ symbol: 1, event_time: -1 });

// Ensure unique wallet addresses.
db.wallets.createIndex({ address: 1 }, { unique: true });
