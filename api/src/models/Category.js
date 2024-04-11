import { Model, DataTypes } from "sequelize";

import { sequelize } from "../db.js";
import Product from "./Product.js";

class Category extends Model {}

Category.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "category",
	}
);

Category.hasMany(Product);

export default Category;
