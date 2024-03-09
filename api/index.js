import express from "express";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

let database = JSON.parse(fs.readFileSync("./database.json"));
const saveDatabase = () => {
  fs.writeFileSync("./database.json", JSON.stringify(database, null, 2));
};

const PORT = 8765;

app.post("/new_product/", (req, res) => {
  const { title, price } = req.body;
  database.products.push({
    title,
    price,
  });
  saveDatabase();
  res.json({});
});

app.get("/get_product/", (req, res) => {
  res.json({
    product: database.products.find(
      (product) => product.id == parseInt(req.query["id"])
    ),
  });
});

app.get("/get_products/", (req, res) => {
  res.json({
    products: database.products,
  });
});

app.listen(PORT, () => {
  console.log("start");
});
