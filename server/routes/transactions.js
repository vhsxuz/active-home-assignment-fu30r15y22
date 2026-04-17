import express from 'express';
import prisma from '../db.js';

const router = express.Router();

/**
 * GET /transactions/nft-stats
 * Returns total NFTs count and wallet connection status from the database.
 */
router.get('/nft-stats', async (req, res) => {
  try {
    // Query the database for the total number of NFTs
    const totalNFTs = await prisma.nFT.count();
    
    const stats = {
      totalNFTs,
      walletConnected: true // This display logic is handled by the frontend context
    };
    
    return res.status(200).json(stats);
  } catch (error) {
    console.error("Error fetching NFT Stats from database:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;