import express from "express";
import Product from "../models/Product.js";

export const ProductRouter = express.Router();

ProductRouter.get("/get_product", async (req, res) => {
  const { id } = req.query;
  const product = await Product.findOne({ where: { id: id } });
  res.json(product);
});

ProductRouter.get("/get_product_image", async (req, res) => {
  const { id } = req.query;
  const product = await Product.findOne({ where: { id: id } });
  res.sendFile(product.image, { root: "." });
});
