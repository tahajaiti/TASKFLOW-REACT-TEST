import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Connection Error:", err);
    process.exit(1);
  }
};
