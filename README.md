# **ChainRiskDB — Crypto Leverage & Liquidation Risk Analytics Using MongoDB**

ChainRiskDB is a NoSQL-based financial risk analytics system built on **MongoDB Atlas**.
The project models leveraged crypto derivatives activity across multiple exchanges and wallets, enabling stress testing, liquidation forecasting, wallet-level exposure monitoring, and historical event analysis.

This repository contains:

* Seed datasets for assets, wallets, leveraged positions, price snapshots, and liquidation events
* Indexing strategies for performance optimization
* A complete set of analytics pipelines implemented using MongoDB Aggregation Framework
* Scripts organized into clear modules for reproducibility and grading

---

## **📁 Project Structure**

```
ChainRiskDB-final-project/
│
├── mongo-scripts/
│   ├── 01_seed_assets.js
│   ├── 02_seed_wallets.js
│   ├── 03_seed_positions.js
│   ├── 04_seed_price_snapshots.js
│   ├── 05_seed_liquidations.js
│   ├── 06_create_indexes.js
│   ├── 07_analytics_queries.js
│
└── README.md
```

Each `.js` file is standalone and can be executed directly via **mongosh** or pasted into the Atlas Shell.

---

## **📌 Project Overview**

Volatility in crypto markets creates systemic risk when leveraged positions cluster around similar liquidation prices.
This project demonstrates how MongoDB can be used as a real-time risk engine for:

* Monitoring **wallet-level leverage exposure**
* Identifying **positions closest to liquidation**
* Running **stress test scenarios**
* Analyzing **liquidation spikes over time**
* Aggregating exposure **by exchange, wallet, or symbol**

The goal is to show MongoDB’s strengths: flexible schema, fast aggregation, cluster scaling, and real-time analytics capability.

---

## **🗂️ Dataset Components**

### **1. Assets (`assets` collection)**

Basic metadata on supported cryptocurrencies.

Fields include:

* `_id`, `symbol`, `name`, `asset_type`, `max_supply`

---

### **2. Wallets (`wallets` collection)**

Represents whales, funds, bots, exchanges, institutional desks, and retail clusters.

Fields:

* `_id`, `address`, `owner_label`, `tags`, `risk_flag`, `created_at`

---

### **3. Leveraged Positions (`positions` collection)**

Each document tracks a single leveraged derivative position.

Includes:

* `wallet_id`
* `exchange`
* `symbol`
* `side` (long/short)
* `entry_price`
* `liquidation_price`
* `leverage`
* `margin_mode`

---

### **4. Price Snapshots (`price_snapshots` collection)**

Time-series prices for BTC and ETH used for liquidation-gap calculations.

---

### **5. Liquidation Events (`liquidations` collection)`**

Historical forced liquidations with realized loss values.

---

## **⚙️ Index Strategy**

The project uses optimized indexes for:

```javascript
db.positions.createIndex({ symbol: 1, exchange: 1 });
db.positions.createIndex({ wallet_id: 1 });
db.price_snapshots.createIndex({ symbol: 1, timestamp: -1 });
db.liquidations.createIndex({ symbol: 1, event_time: -1 });
db.wallets.createIndex({ address: 1 }, { unique: true });
```

This ensures fast query performance under real-time workloads.

---

## **📊 Analytics Features**

All analytics pipelines are stored in `07_analytics_queries.js`.

### **1️⃣ Stress Testing by Exchange**

Simulates a BTC price drop (ex: 54,000 USD) and computes:

* Total BTC at risk
* Notional exposure
* Number of positions affected

### **2️⃣ Top 5 Positions Closest to Liquidation**

Ranks all BTC positions by absolute gap between:

```
current_price vs liquidation_price
```

Useful for early-warning risk detection.

---

### **3️⃣ Leverage Concentration by Wallet**

Aggregates notional exposure across all wallets to identify:

* Systemically important entities
* High-risk clusters
* Overleveraged whales

---

### **4️⃣ Liquidation Spikes by Hour and Exchange**

Groups liquidation events by hour to detect:

* Volatility cascades
* Exchange-specific stress
* Time-based liquidation clusters

---

## **🔌 How to Run the Project**

### **1. Connect to MongoDB Atlas**

```bash
mongosh "your-connection-string-here"
```

---

### **2. Seed the database**

Example:

```bash
mongosh "connection-string" mongo-scripts/01_seed_assets.js
mongosh "connection-string" mongo-scripts/02_seed_wallets.js
```

Or simply paste the scripts into the Atlas Shell.

---

### **3. Run Analytics**

```bash
mongosh "connection-string" mongo-scripts/07_analytics_queries.js
```

Outputs include:

* Stress test report
* Closest-to-liquidation ranking
* Wallet concentration summary
* Liquidation spike analysis

---

## **🏗️ Technologies Used**

* **MongoDB Atlas**
* **MongoDB Aggregation Framework**
* **mongosh**
* **Node.js / JavaScript syntax for scripts**
* **VS Code + GitHub Codespaces**

---

## **📘 Learning Outcomes**

This project demonstrates:

✔ How MongoDB handles financial-risk workloads
✔ Modeling of hierarchical and semi-structured data
✔ Real-time aggregation pipelines
✔ Building a scalable risk-analytics system without SQL
✔ Using GitHub Codespaces for cloud-native development

---

