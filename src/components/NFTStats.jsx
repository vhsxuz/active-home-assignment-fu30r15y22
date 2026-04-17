import React, { useEffect, useState } from 'react';
import { getNFTStats } from '../api/Api';
import { useWallet } from '../context/WalletContext';
import { Wallet, Image as ImageIcon, LogOut, ChevronRight } from 'lucide-react';

const NFTStats = () => {
  const { account, isConnected, connectWallet, disconnectWallet } = useWallet();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getNFTStats();
        setStats(data);
      } catch (err) {
        setError('Failed to fetch NFT statistics.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const truncateAddress = (addr) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <div>
      <div className="header-actions">
        <h1 className="page-title">Dashboard Overview</h1>
        
        {isConnected ? (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span className="status-badge connected" style={{ marginTop: 0 }}>
              <span className="status-dot"></span>
              {truncateAddress(account)}
            </span>
            <button onClick={disconnectWallet} className="btn-danger">
              <LogOut size={18} />
              Disconnect
            </button>
          </div>
        ) : (
          <button onClick={connectWallet} className="btn-primary">
            <Wallet size={18} />
            Connect Wallet
          </button>
        )}
      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="stats-grid">
          
          {/* Card 1: Total NFTs */}
          <div className="glass-card">
            <div className="stat-title">
              <ImageIcon size={20} color="var(--accent-primary)" />
              Total NFTs Indexed
            </div>
            <div className="stat-value">
              {stats?.totalNFTs?.toLocaleString() || 0}
            </div>
          </div>

          {/* Card 2: Wallet Connection Status */}
          <div className="glass-card">
            <div className="stat-title">
              <Wallet size={20} color={isConnected ? "var(--success)" : "var(--danger)"} />
              Wallet Connection
            </div>
            <div className="stat-value" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
              {isConnected ? 'Active & Secure' : 'Not Connected'}
            </div>
            
            <div className={`status-badge ${isConnected ? 'connected' : 'disconnected'}`}>
              <span className="status-dot"></span>
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default NFTStats;
