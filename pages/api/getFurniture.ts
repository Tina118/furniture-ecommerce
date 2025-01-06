import type { NextApiRequest, NextApiResponse } from "next";

import Furniture from "@/model/Furniture";
import connectDb from "@/middleware/mongoose";
import { IFurniture } from "@/interface";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IFurniture[] | { message: string; error: any }>
) => {
  let products = await Furniture.find();
  res.status(200).json(products);
};

export default connectDb(handler);
