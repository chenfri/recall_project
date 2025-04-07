import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import router from './routes/index';
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Error handling middleware
app.use(errorHandler);

export default app; 