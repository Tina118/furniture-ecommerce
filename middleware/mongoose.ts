import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const connectDb = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
  if (mongoose.connections[0].readyState) {
    // If already connected, proceed with the handler
    return handler(req, res);
  }

  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URI as string);

    // Call the API handler after a successful connection
    return handler(req, res);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Database connection error", error });
  }
};

export default connectDb;
