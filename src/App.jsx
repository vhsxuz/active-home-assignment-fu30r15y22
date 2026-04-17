import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes.jsx';
import { WalletProvider } from './context/WalletContext.jsx';

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <div className="app-container">
          <nav className="navbar">
            <div className="logo">NFT Dashboard</div>
          </nav>
          <main className="main-content">
            <AppRoutes />
          </main>
        </div>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;
