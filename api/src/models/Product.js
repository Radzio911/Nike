import { Model, DataTypes } from "sequelize";

import { sequelize } from "../db.js";

class Product extends Model {}

Product.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.NUMBER,
		},
		description: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
		},
		category: {
			type: DataTypes.NUMBER,
			allowNull: false,
			references: {
				model: "category",
				key: "id",
			},
		},
	},
	{
		sequelize,
		modelName: "product",
	}
);

export default Product;
