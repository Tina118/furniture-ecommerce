// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

type Data = {
  success?: string;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body[i].title,
        id: req.body[i].id,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        sale:req.body[i].sale,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
        review: req.body[i].review
      });

      await p.save();
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
