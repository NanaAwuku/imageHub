import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 6000;
const MONGO_URL = process.env.MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      dbName: "tobmas-db",
    });
    console.log('DB is connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit process with failure
  }
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Define your routes here

// Start server after MongoDB connection
const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

// Run the server
startServer();
