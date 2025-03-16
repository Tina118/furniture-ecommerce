const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema(
  {
    title: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    sale: { type: Number },
    availableQty: { type: Number, required: true },
    review: [
      {
        name: { type: String },
        email: { type: String },
        rating: { type: Number },
        desc: { type: String },
      },
    ],
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Product", ProductScheme);
