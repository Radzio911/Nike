import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const User = sequelize.define("User", {
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	firstName: DataTypes.STRING,
	email: DataTypes.STRING,
});

// import { Model, DataTypes } from "sequelize";

// import { sequelize } from "../db.js";

// class User extends Model {}

// User.init(
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize,
//     modelName: "user",
//   }
// );

// export default User;
