import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Category } from "./Category.js";

export const Product = sequelize.define("Product", {
	title: DataTypes.STRING,
	categoryId: {
		type: DataTypes.INTEGER,
		references: {
			model: Category,
			key: "id",
		},
	},
});

Category.belongsToMany(Product);

// import { Model, DataTypes } from "sequelize";

// import { sequelize } from "../db.js";
// import Category from "./Category.js";

// class Product extends Model {}

// Product.init(
// 	{
// 		title: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 		price: {
// 			type: DataTypes.NUMBER,
// 		},
// 		description: {
// 			type: DataTypes.STRING,
// 		},
// 		image: {
// 			type: DataTypes.STRING,
// 		},
// 		categoryId: {
// 			type: DataTypes.NUMBER,
// 			allowNull: true,
// 			references: {
// 				model: "category",
// 				key: "id",
// 			},
// 		},
// 	},
// 	{
// 		sequelize,
// 		modelName: "product",
// 	}
// );

// Product.hasOne(Category);

// export default Product;
