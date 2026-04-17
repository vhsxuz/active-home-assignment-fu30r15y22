import express from 'express';
import cors from 'cors';
import transactionsRoute from './routes/transactions.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/transactions', transactionsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
