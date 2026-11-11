# 🎰 CasinoBot

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**CasinoBot** is an interactive, full-featured Discord Casino and Virtual Economy Bot built with **Node.js**, **Discord.js v14**, and **MongoDB**. It brings a complete casino experience directly into your Discord server with interactive button and select-menu gameplay, real-time canvas and embed visuals, a dual-currency wallet system (Server Credits & Crypto/Tokens), provably fair RNG, and comprehensive server administration tools.

---

## ✨ Features

- **🎮 Interactive Casino Games:** Play classic and modern casino games using Discord UI components (Buttons, Modals, and Select Menus) with real-time multiplier updates.
- **💰 Full Economy & Wallet System:** Persistent user balances, bank storage, daily/weekly rewards, tipping, rakeback, and global leaderboards.
- **🪙 Crypto & Credits Integration:** Support for virtual server credits alongside automated cryptocurrency deposit and withdrawal tracking (e.g., Litecoin/USDT webhook or RPC node integration).
- **🎲 Provably Fair System:** Cryptographic server-seed and client-seed hashing ($\text{SHA-256}$) so players can independently verify the fairness of every bet.
- **📊 Player Profiles & Statistics:** Track total wagered, net profit, win/loss streaks, favorite games, and VIP tier progression.
- **🎁 Giveaways & Rain System:** Host automated currency giveaways or "rain" active chat participants with free credits.
- **🛡️ Anti-Abuse & Security:** Built-in command cooldowns, per-game minimum/maximum bet limits, active-session locking (prevents double-betting Exploits), and detailed audit logging via Discord webhooks.
- **⚙️ Highly Configurable:** Customize house edge, payout multipliers, game cooldowns, embed colors, and channel restrictions via `config.json` and `.env`.

---

## 🎲 Supported Games

| Game | Description | Controls & Mechanics | Payout / Multiplier |
| :--- | :--- | :--- | :--- |
| **💣 Mines** | $5 \times 5$ grid minesweeper casino game. | Choose between $1$ and $24$ mines. Click tiles via Discord buttons to reveal gems and cash out anytime before hitting a mine. | Dynamic ($1.03\times$ up to $24.75\times$) |
| **🃏 Blackjack** | Classic $21$ against the dealer. | Supports **Hit**, **Stand**, **Double Down**, **Split**, and **Insurance**. Dealer stands on all $17\text{s}$. | $1:1$ Win, $3:2$ Blackjack |
| **🚀 Crash** | Multiplier climbs until it randomly crashes. | Cash out via the interactive button before the rocket crashes to lock in your multiplier. | $1.01\times$ – $1000\times$ |
| **🎡 Roulette** | European single-zero roulette wheel. | Bet on Red/Black, Odd/Even, High/Low, Dozens, Columns, or Straight Numbers ($0\text{–}36$). | $2\times$ (Color/Parity) to $36\times$ (Single) |
| **🎰 Slots** | $3$-reel animated slot machine. | Spin the reels to match $2$ or $3$ symbols across the payline, including Wilds and Jackpot symbols. | $2\times$ – $100\times$ |
| **🗼 Towers** | Climb the tower row by row. | Select `Easy`, `Medium`, or `Hard` difficulty and pick the safe tile on each floor to multiply your bet. | Cumulative per floor |
| **🪙 Coinflip** | $50/50$ Heads or Tails (PvE or PvP). | Play instantly against the house or challenge another server member to a $1\text{v}1$ wager. | $1.96\times$ |
| **🎲 Dice / Over-Under** | Roll a $100$-sided die ($0.00\text{–}100.00$). | Choose your target number and roll Over or Under. Adjust your win chance to scale the payout multiplier. | Dynamic based on odds |
| **🃏 High Card / War** | Fast-paced card draw against the dealer. | Highest card wins; ties trigger an option to go to War (double bet) or surrender half. | $2\times$ |
| **🔴 Plinko** | Drop a ball down a pegged pyramid. | Select Risk Level (`Low`, `Medium`, `High`) and number of rows ($8\text{–}16$). | $0.2\times$ – $1000\times$ |

---

## 📜 Commands List

CasinoBot supports both **Slash Commands (`/`)** and **Prefix Commands (`!` or `$`)**.

### 💰 Economy & Wallet Commands
| Command | Aliases | Arguments | Description |
| :--- | :--- | :--- | :--- |
| `/balance` | `!bal`, `!wallet`, `!credits` | `[@user]` | View your (or another user's) current wallet, bank, and total wagered balance. |
| `/deposit` | `!dep` | `[amount / all]` | Deposit credits into your safe bank or generate a crypto deposit address. |
| `/withdraw` | `!with` | `<amount> [address]` | Withdraw funds from your bank or request a crypto payout to an external wallet. |
| `/tip` | `!pay`, `!send`, `!give` | `<@user> <amount>` | Transfer credits directly to another player. |
| `/daily` | `!claim` | *None* | Claim your daily free credit bonus (scales with streak and VIP level). |
| `/rakeback` | `!rb` | `[claim]` | View and claim accumulated rakeback from your total wagers. |
| `/leaderboard` | `!lb`, `!top` | `[balance \| wagered \| wins]` | Display the top $10$ richest or highest-wagering players in the server. |
| `/profile` | `!stats`, `!me` | `[@user]` | View detailed gambling statistics, VIP rank, win rate, and net profit. |

### 🎮 Game Commands
| Command | Aliases | Arguments | Description |
| :--- | :--- | :--- | :--- |
| `/mines` | `!mines` | `<bet> <mines (1-24)>` | Start an interactive game of Mines on a $5 \times 5$ button grid. |
| `/blackjack` | `!bj` | `<bet>` | Start a hand of Blackjack against the dealer. |
| `/crash` | `!crash` | `<bet> [auto_cashout]` | Join or start a Crash round with an optional auto-cashout multiplier. |
| `/roulette` | `!rl`, `!roulette` | `<bet> <space>` | Place a bet on the roulette table (`red`, `black`, `odd`, `even`, `1-12`, or `0-36`). |
| `/slots` | `!slots`, `!spin` | `<bet>` | Spin the $3$-reel slot machine. |
| `/towers` | `!tower` | `<bet> [easy\|medium\|hard]` | Start climbing the multiplier tower. |
| `/coinflip` | `!cf`, `!flip` | `<bet> <heads\|tails> [@opponent]` | Flip a coin against the bot or challenge another player. |
| `/dice` | `!roll` | `<bet> <target> <over\|under>` | Roll the $0\text{–}100$ provably fair dice. |
| `/plinko` | `!plinko` | `<bet> <risk>` | Drop a ball down the Plinko board. |
| `/highcard` | `!war`, `!hc` | `<bet>` | Play High Card / Casino War against the dealer. |

### 🎉 Community & Events
| Command | Aliases | Arguments | Description |
| :--- | :--- | :--- | :--- |
| `/rain` | `!rain` | `<amount> [duration]` | Distribute credits evenly among recently active users in the channel. |
| `/giveaway` | `!gstart` | `<prize> <winners> <time>` | Start an interactive button-based credit giveaway. |
| `/reroll` | `!greroll` | `<message_id>` | Reroll a winner for an ended giveaway. |
| `/fairness` | `!verify`, `!seed` | `[client_seed]` | View your active server seed hash, rotate seeds, or verify a past bet ID. |

### 🛠️ Admin & Owner Commands
| Command | Aliases | Arguments | Description |
| :--- | :--- | :--- | :--- |
| `/addmoney` | `!addbal`, `!givemoney` | `<@user> <amount>` | **(Admin)** Add credits directly to a user's balance. |
| `/removemoney`| `!rembal`, `!takemoney`| `<@user> <amount>` | **(Admin)** Deduct credits from a user's balance. |
| `/resetuser` | `!wipe` | `<@user>` | **(Owner)** Reset a user's balance and betting statistics. |
| `/blacklist` | `!banuser` | `<@user> [reason]` | **(Admin)** Block a user from interacting with any casino commands. |
| `/houseedge` | `!setedge` | `<game> <percentage>` | **(Owner)** Adjust the house edge percentage dynamically. |
| `/maintenance`| `!lockbot` | `<on\|off> [reason]` | **(Owner)** Pause all new bets and place the bot into maintenance mode. |

---

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the root directory of the project and configure the following variables:

```env
# ==========================================
# 🤖 DISCORD BOT CONFIGURATION
# ==========================================
DISCORD_TOKEN=your_discord_bot_token_here
CLIENT_ID=your_discord_application_client_id
GUILD_ID=your_primary_server_guild_id
PREFIX=!
OWNER_IDS=123456789012345678,987654321098765432

# ==========================================
# 🗄️ DATABASE CONFIGURATION
# ==========================================
# MongoDB Connection URI (Local or MongoDB Atlas)
MONGODB_URI=mongodb://127.0.0.1:27017/casinobot
# Optional Redis URL (if caching/session locking is enabled)
REDIS_URL=redis://127.0.0.1:6379

# ==========================================
# 🪙 CRYPTO & PAYMENT GATEWAY (OPTIONAL)
# ==========================================
CRYPTO_ENABLED=false
# Supported: LTC, USDT, BTC (via RPC Node or Payment API)
LTC_RPC_HOST=127.0.0.1
LTC_RPC_PORT=9332
LTC_RPC_USER=litecoinrpc
LTC_RPC_PASS=your_secure_rpc_password
PAYMENT_API_KEY=your_payment_gateway_api_key
WEBHOOK_SECRET=your_payment_webhook_secret

# ==========================================
# 📡 LOGGING & WEBHOOKS
# ==========================================
BET_LOGS_WEBHOOK=https://discord.com/api/webhooks/xxx/yyy
TRANSACTION_LOGS_WEBHOOK=https://discord.com/api/webhooks/xxx/yyy
ADMIN_LOGS_WEBHOOK=https://discord.com/api/webhooks/xxx/yyy
LOG_LEVEL=info
NODE_ENV=production
```

---

## 🔧 Configuration Settings (`config.json` / `config.js`)

Gameplay parameters, betting limits, and visual styles are controlled via the configuration file:

```json
{
  "bot": {
    "name": "CasinoBot",
    "prefix": "!",
    "status": "🎰 /help | Provably Fair Casino",
    "activityType": "Competing",
    "maintenanceMode": false
  },
  "economy": {
    "currencyName": "Credits",
    "currencySymbol": "🪙",
    "startingBalance": 500,
    "dailyReward": {
      "min": 250,
      "max": 1000,
      "cooldownHours": 24,
      "streakBonusPercent": 10
    },
    "rakebackPercent": 1.5,
    "minTipAmount": 10
  },
  "betting": {
    "defaultBet": 100,
    "minBet": 10,
    "maxBet": 100000,
    "maxProfitPerBet": 500000,
    "houseEdgePercent": 3.0,
    "sessionTimeoutSeconds": 120,
    "commandCooldownSeconds": 3
  },
  "games": {
    "mines": {
      "enabled": true,
      "gridSize": 25,
      "minMines": 1,
      "maxMines": 24
    },
    "blackjack": {
      "enabled": true,
      "decks": 6,
      "blackjackPayout": 1.5,
      "dealerStandsOnSoft17": true
    },
    "crash": {
      "enabled": true,
      "instantCrashChance": 0.03,
      "maxMultiplier": 1000
    },
    "slots": {
      "enabled": true,
      "reels": 3
    },
    "roulette": {
      "enabled": true,
      "spinDurationSeconds": 15
    }
  },
  "channels": {
    "allowedGameChannels": [],
    "commandsChannelId": "",
    "giveawayChannelId": "",
    "logsChannelId": ""
  },
  "colors": {
    "primary": "#5865F2",
    "win": "#57F287",
    "loss": "#ED4245",
    "neutral": "#2B2D31",
    "gold": "#FEE75C"
  }
}
```

---

## 📁 Project Structure

```text
CasinoBot/
├── src/
│   ├── commands/
│   │   ├── admin/          # Balance management, blacklist, maintenance
│   │   ├── economy/        # Balance, deposit, withdraw, tip, daily, leaderboard
│   │   ├── games/          # Mines, Blackjack, Crash, Roulette, Slots, Coinflip, Dice
│   │   └── utility/        # Help, ping, profile, provably fair verification
│   ├── events/
│   │   ├── client/         # ready.js, interactionCreate.js, messageCreate.js
│   │   └── guild/          # Member join/leave & anti-alt checks
│   ├── models/             # Mongoose schemas (User, Bet, Transaction, Giveaway, Guild)
│   ├── utils/
│   │   ├── fairness.js     # SHA-256 HMAC provably fair RNG generator
│   │   ├── embeds.js       # Standardized Discord Embed builders
│   │   ├── canvas.js       # Dynamic image generation for tables/cards
│   │   └── logger.js       # Console & Discord Webhook logging
│   └── index.js            # Main bot entrypoint & shard/client loader
├── config.json             # Gameplay, economy, and embed configuration
├── .env.example            # Template for environment variables
├── package.json            # Dependencies and start scripts
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** `v18.0.0` or higher (`v20 LTS` recommended)
- **MongoDB** `v6.0+` (Local instance or MongoDB Atlas cluster)
- **Git**
- A **Discord Bot Application** with `Message Content`, `Server Members`, and `Guilds` privileged intents enabled in the [Discord Developer Portal](https://discord.com/developers/applications).

### Step-by-Step Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Reqping90/CasinoBot.git
   cd CasinoBot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment & Settings:**
   - Copy `.env.example` to `.env` and fill in your `DISCORD_TOKEN`, `CLIENT_ID`, and `MONGODB_URI`.
   - Edit `config.json` to adjust your currency symbol, bet limits, and role/channel IDs.

4. **Deploy Slash Commands:**
   ```bash
   npm run deploy
   # or: node deploy-commands.js
   ```

5. **Start the Bot:**
   - **Development mode (with auto-restart):**
     ```bash
     npm run dev
     ```
   - **Production mode (using Node or PM2):**
     ```bash
     npm start
     # or with PM2:
     pm2 start src/index.js --name "CasinoBot"
     ```

---

## 🔐 Provably Fair Mechanism

Every game outcome in **CasinoBot** is deterministically verifiable using cryptographic hashing:
1. Before a game starts, the bot generates a secret **Server Seed** and shows the player its $\text{SHA-256}$ hash.
2. The player can set their own custom **Client Seed** at any time.
3. Outcomes are calculated using:
   $$\text{Result} = \text{HMAC\_SHA256}(\text{serverSeed}, \text{clientSeed} : \text{nonce})$$
4. When the server seed is rotated, the plain-text seed is revealed so players can independently verify past bets using `/fairness`.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/new-game`).
3. Commit your changes (`git commit -m "Add Keno game module"`).
4. Push to the branch (`git push origin feature/new-game`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.
