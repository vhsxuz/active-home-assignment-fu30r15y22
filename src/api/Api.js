import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3001', // Local backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNFTStats = async () => {
  try {
    const response = await apiClient.get('/transactions/nft-stats');
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};

export default apiClient;
