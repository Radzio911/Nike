import express from "express";
import { Product } from "../models/Product.js";
import { Category } from "../models/Category.js";

export const ProductRouter = express.Router();

ProductRouter.get("/search", async (req, res) => {
	const { query, category } = req.query;

	let products;
	if (category) {
		products = await Product.findAll({ where: { category: category } });
	} else {
		products = await Product.findAll();
		products = products.filter((product) =>
			product.title.toLowerCase().includes(query.toLowerCase())
		);
	}
	res.json({
		products: products,
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
	console.log(title, price);
	console.log(image);
	const product = await Product.create({ title, price, description });
	image.mv(`./src/media/product_images/${product.id}.png`);
	product.image = product.id + ".png";
	product.categoryId = 1;
	product.save();
	res.json({});
});

ProductRouter.post("/test", (req, res) => {
	res.json(req.body);
});

ProductRouter.get("/by_category", async (req, res) => {
	const { category } = req.query;
	const c = await Category.findOne({ where: { name: category } });
	if (c !== null) {
		const products = await Product.findAll({ where: { category: c.id } });
		res.json({ products });
	} else {
		res.status(500);
	}
});
