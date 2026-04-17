import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
          setAccount('');
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    }
  };

  useEffect(() => {
    checkWalletConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
        } else {
          setAccount('');
          setIsConnected(false);
        }
      });
      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners('accountsChanged');
        window.ethereum.removeAllListeners('chainChanged');
      }
    };
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  const disconnectWallet = () => {
    // In MetaMask, true disconnection must be done from the wallet itself.
    // However, we can clear the frontend state.
    setAccount('');
    setIsConnected(false);
  };

  return (
    <WalletContext.Provider value={{ account, isConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
