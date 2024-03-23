import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "db",
  "username",
  process.env.DB_PASSWORD,
  {
    dialect: "sqlite",
    host: "./db.sqlite",
  }
);
