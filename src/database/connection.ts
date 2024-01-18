import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URL = process.env.MONGODB_URI as string;
export const connectToDatabase = async () => {
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