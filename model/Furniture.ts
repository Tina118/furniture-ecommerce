import { Model, model, Schema } from "mongoose";

import { IFurniture } from "@/interface";

const FurnitureSchema = new Schema<IFurniture>(
  {
    name: { type: String, required: true },
    src: { type: String, required: true },
    category: { type: String, required: true },
    originalPrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    description: { type: String, required: true },
    feature: { type: String, required: true },
    featurePoints: [{ type: String }],
    careInstructions: [{ type: String }],
  },
  { timestamps: true }
);

export default model<IFurniture>(
  "Furniture",
  FurnitureSchema
) as unknown as Model<IFurniture>;
