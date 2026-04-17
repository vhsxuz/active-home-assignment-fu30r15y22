import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NFTStats from '../components/NFTStats.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/nft-stats" replace />} />
      <Route path="/dashboard/nft-stats" element={<NFTStats />} />
    </Routes>
  );
};

export default AppRoutes;
