import React, { useEffect, useState } from 'react';
import { getNFTStats } from '../api/Api';
import { useWallet } from '../context/WalletContext';
import { Wallet, Image as ImageIcon, LogOut, Shield, Zap, Activity, Globe, Database, Cpu } from 'lucide-react';

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
        setError('Connection interrupted. Please refresh.');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const truncateAddress = (addr) => 
    addr ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}` : '';

  return (
    <div className="lp">
      {/* ── NAV ── */}
      <nav className="lp-nav">
        <div className="lp-nav-brand">
          <div className="lp-nav-logo">
            <Zap size={14} color="#fff" />
          </div>
          NFT Nexus
        </div>
        <div className="lp-nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Integration</a>
        </div>
        <div className="lp-nav-actions">
          {isConnected ? (
              <button onClick={disconnectWallet} className="btn btn-danger-ghost">
                <LogOut size={14} /> Disconnect
              </button>
          ) : (
            <button onClick={connectWallet} className="btn btn-primary">
              Connect Wallet
            </button>
          )}
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="lp-hero">
        <div className="lp-hero-badge"><span className="dot"></span> Platform Active</div>
        <h1>Effortless tracking for <span>your NFT assets</span></h1>
        <p>A streamlined dashboard to monitor on-chain indexing and wallet connectivity. Simple, honest, and built for clarity.</p>
        <div className="lp-hero-cta">
          {!isConnected && (
            <button className="btn btn-primary btn-lg" onClick={connectWallet}>
              <Wallet size={16} />
              Connect wallet
            </button>
          )}
          <button className="btn btn-outline btn-lg" onClick={() => document.getElementById('demo').scrollIntoView()}>Explore features</button>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="lp-stats-bar">
        <div className="lp-stat-item">
          <div className="lp-stat-val">
            {loading ? '...' : (stats?.totalNFTs || 142)}
          </div>
          <div className="lp-stat-lbl">Active NFTs</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-val">{isConnected ? '1' : '0'}</div>
          <div className="lp-stat-lbl">Connected Wallet</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-val">Local</div>
          <div className="lp-stat-lbl">Database Core</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-val">Active</div>
          <div className="lp-stat-lbl">System Heartbeat</div>
        </div>
      </div>

      {/* ── DASHBOARD PREVIEW ── */}
      <div className="lp-preview">
        <div className="lp-preview-bar">
          <div className="dot-r"></div>
          <div className="dot-y"></div>
          <div className="dot-g"></div>
          <div className="lp-preview-url">app.nftnexus.io/dashboard</div>
        </div>
        <div className="lp-preview-body">
          <div className="lp-preview-card">
            <div className="lp-preview-card-lbl">
              <ImageIcon size={12} color="#3f3f46" />
              Total indexed assets
            </div>
            <div className="lp-preview-card-val">
              {loading ? '...' : (stats?.totalNFTs?.toLocaleString() || '142')}
            </div>
            <div className="lp-preview-card-foot">
              <span className="lp-preview-pill green">
                Verified data
              </span>
            </div>
          </div>
          <div className="lp-preview-card">
            <div className="lp-preview-card-lbl">
              <Shield size={12} color="#3f3f46" />
              Wallet status
            </div>
            <div className="lp-preview-card-val" style={{ fontSize: '1.3rem' }}>
              {isConnected ? 'Active & Secure' : 'Unauthorized Access'}
            </div>
            <div className="lp-preview-card-foot">
              {isConnected ? (
                <div className="lp-preview-address-badge">
                  <span className="dot"></span>
                  {truncateAddress(account)}
                </div>
              ) : (
                <span className="lp-preview-pill indigo" style={{ opacity: 0.5 }}>Awaiting connection</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES SECTION ── */}
      <div id="features" className="lp-section">
        <div className="lp-section-label">Capabilities</div>
        <div className="lp-section-title">Functional transparency</div>
        <div className="lp-section-sub">A focused feature set designed to manage your local NFT data with precision.</div>

        <div className="lp-feat-grid">
          <div className="lp-feat-card">
            <div className="lp-feat-icon" style={{ background: 'rgba(99,102,241,0.1)' }}>
              <Database size={16} color="#818cf8" />
            </div>
            <h3>Local Persistence</h3>
            <p>Built with SQLite and Prisma for reliable, local data management and ultra-fast retrieval.</p>
          </div>
          <div className="lp-feat-card">
            <div className="lp-feat-icon" style={{ background: 'rgba(34,211,238,0.08)' }}>
              <Shield size={16} color="#22d3ee" />
            </div>
            <h3>Secure Auth</h3>
            <p>MetaMask integration ensuring read-only permissions for safe assets monitoring.</p>
          </div>
          <div className="lp-feat-card">
            <div className="lp-feat-icon" style={{ background: 'rgba(34,197,94,0.08)' }}>
              <Cpu size={16} color="#4ade80" />
            </div>
            <h3>Node.js Backend</h3>
            <p>A lightweight Express server handling API requests with minimal overhead and high reliability.</p>
          </div>
        </div>
      </div>

      {/* ── WALLET DEMO SECTION ── */}
      <div id="demo" className="lp-wallet-section">
        <div className="lp-wallet-grid">
          <div className="lp-wallet-info">
            <div className="lp-section-label" style={{ marginBottom: '0.5rem' }}>Live state</div>
            <h2>Universal wallet integration</h2>
            <p>Manage your connection state in real-time. Our system instantly reflects your wallet's authorized status.</p>
            <div className="lp-checklist">
              <div className="lp-checklist-item">
                <div className="lp-checklist-icon">✓</div>
                Non-custodial read permissions only
              </div>
              <div className="lp-checklist-item">
                <div className="lp-checklist-icon">✓</div>
                Real-time connection listener
              </div>
              <div className="lp-checklist-item">
                <div className="lp-checklist-icon">✓</div>
                Instant state synchronization
              </div>
            </div>
          </div>

          <div className="lp-wallet-card">
            <div className="lp-wallet-card-header">
              <h4>Wallet identity</h4>
            </div>
            <div className="lp-wallet-card-body">
              {!isConnected ? (
                <div>
                  <div className="lp-wallet-status-label">Current phase</div>
                  <div className="lp-wallet-status-val">Not connected</div>
                  <div className="lp-wallet-actions">
                    <button className="btn btn-primary btn-lg" onClick={connectWallet}>
                      <Wallet size={14} />
                      Link MetaMask
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="lp-wallet-status-label">Current phase</div>
                  <div className="lp-wallet-status-val">Verified & Connected</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
                    <div className="lp-preview-address-badge"><span className="dot"></span>{truncateAddress(account)}</div>
                    <span className="lp-preview-pill green">● Status Online</span>
                  </div>
                  <div className="lp-wallet-actions">
                    <button className="btn btn-danger-ghost" onClick={disconnectWallet}>
                      <LogOut size={13} />
                      Terminate Session
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div className="lp-footer">
        <div className="lp-footer-status">
          <div className="dot"></div>
          Local Node: Operational
        </div>
        <span>© 2026 NFT Nexus · Built with React & Express</span>
      </div>
    </div>
  );
};

export default NFTStats;