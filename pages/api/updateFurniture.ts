import type { NextApiRequest, NextApiResponse } from "next";

import Furniture from "@/model/Furniture";
import { furniture } from "@/data/furnitureData";
import connectDb from "@/middleware/mongoose";
import { IFurniture } from "@/interface";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFurniture[] | { message: string; error: any }>
) {
  try {
    // Insert the furniture data into MongoDB
    const furnituresInDB = await Furniture.insertMany(furniture.data);

    // Return the inserted furniture data
    res.status(200).json(furnituresInDB);
  } catch (error) {
    console.error("Error inserting data:", error);

    // Return error response
    res.status(500).json({ message: "Error inserting data", error });
  }
}

export default connectDb(handler);
