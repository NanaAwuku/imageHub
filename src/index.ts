import express from "express";
import mongoose from "mongoose";
import imageRoutes from './routes/imageRoutes';
import dotenv from "dotenv";
import { connectToDatabase } from "./database/connection";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 6000;




// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Define your routes here
app.use('/api', imageRoutes);

// Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal server error' });
// });

// Start server after MongoDB connection
const startServer = async () => {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

// Run the server
startServer();
