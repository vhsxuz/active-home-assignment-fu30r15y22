# NFT Nexus: Campaign & Dashboard Platform

A modern, full-stack application for indexing digital assets and monitoring wallet connectivity. Built as a monolithic repository featuring a robust Node.js/Express backend and a premium, responsive React frontend.

![Platform Preview](./src/assets/hero.png)

## 🚀 Features

- **Real-Time Data Integration**: Fetches dynamic NFT index statistics from a persistent backend API.
- **Wallet Connectivity**: Full non-custodial read-only integration via MetaMask with live state synchronization.
- **Live Ecosystem Dashboard**: A high-end landing page delivering critical ecosystem health metrics at a single glance.
- **Persistent Local Database**: Uses SQLite and Prisma ORM for robust data management and simulated tracking.
- **Design System Excellence**: Built with plain CSS employing glassmorphism, mesh gradients, and modern web styling principles.

## 🛠 Tech Stack

**Frontend Framework & Libraries**
- **React.js** + **Vite**
- **React Router** for application navigation
- **ethers.js** for Blockchain/MetaMask interaction
- **Lucide-react** for scalable SVG iconography
- **Axios** for HTTP communication

**Backend API**
- **Node.js** + **Express.js** 
- **Prisma** (Object-Relational Mapping)
- **SQLite** (Local Data Persistence)

## 📦 Project Structure

```text
├── prisma/
│   ├── schema.prisma       # Database schema modeling NFTs
│   ├── seed.js             # Seeding script for mock data
│   └── dev.db              # SQLite Database
├── server/
│   ├── index.js            # Express server entry point
│   ├── db.js               # Prisma Client initialization
│   └── routes/
│       └── transactions.js # API Routes for NFT statistics
├── src/
│   ├── api/                # Axios configuration and API calling services
│   ├── assets/             # Images and visual resources
│   ├── components/         # Reusable React components (NFTStats, etc.)
│   ├── context/            # Global React Context (WalletContext)
│   ├── routes/             # Client-side routing configuration
│   ├── App.jsx             # Root frontend component
│   └── index.css           # Global Design System
```

## 🏎 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16.0 or higher recommended)
- [MetaMask Browser Extension](https://metamask.io/) for testing wallet connections.

### 1. Installation

Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Database Setup

Ensure the database schema is pushed and populated with the initial seed data:
```bash
npx prisma db push
node prisma/seed.js
```

### 3. Run the Development Server

The application is configured to run both the Vite frontend and Express backend concurrently.
Start the ecosystem:
```bash
npm run dev
```

The services will initialize on:
- **Frontend Dashboard**: `http://localhost:5173`
- **Backend API**: `http://localhost:3001`

### 4. Interacting with the Platform
- Navigate to the frontend on your browser.
- Ensure MetaMask is logged in.
- Click **Connect Wallet** to test the secure integration and view live system status mappings.

## 📄 License
This project is restricted as part of an active technical assignment.
