import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Category = sequelize.define("Category", {
	name: DataTypes.STRING,
});

// import { Model, DataTypes } from "sequelize";

// import { sequelize } from "../db.js";
// import Product from "./Product.js";

// class Category extends Model {}

// Category.init(
// 	{
// 		name: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 		},
// 	},
// 	{
// 		sequelize,
// 		modelName: "category",
// 	}
// );

// export default Category;
