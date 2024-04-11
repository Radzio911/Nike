import express from "express";
import Product from "../models/Product.js";

export const ProductRouter = express.Router();

ProductRouter.get("/search", async (req, res) => {
	const { query } = req.query;
	const products = await Product.findAll();
	res.json({
		products: products.filter((product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		),
	});
});

ProductRouter.get("/get", async (req, res) => {
	const { id } = req.query;
	const product = await Product.findOne({ where: { id: id } });
	res.json(product);
});

ProductRouter.get("/image", async (req, res) => {
	const { id } = req.query;
	const product = await Product.findOne({ where: { id: id } });
	res.sendFile(product.image, { root: "./src/media/product_images" });
});

ProductRouter.post("/new_product", async (req, res) => {
	const image = req.files.image;
	const { title, price, description } = req.body;
	const product = await Product.create({ title, price, description });
	image.mv(`./src/media/product_images/${product.id}.png`);
	product.image = product.id + ".png";
	product.save();
	res.json({ product });
});
