// server.ts

import express from 'express';
import imageRoutes from './routes/imageRoutes';
import dotenv from 'dotenv';
import { connectToDatabase } from './database/connection';
import { errorHandler } from './middleware/errorMiddleware';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 6000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', imageRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start server after MongoDB connection
const startServer = async () => {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

// Run the server
startServer();
