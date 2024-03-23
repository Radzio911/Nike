import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./db.js";
import { UserRouter } from "./routers/UserRouter.js";
import { ProductRouter } from "./routers/ProductRouter.js";
import cors from "cors";
import cookieSession from "cookie-session";

dotenv.config();

console.log();

const app = express();

sequelize.sync().then(() => {
  console.log("Db is ready");
});

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_KEY],
  })
);

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/users/", UserRouter);
app.use("/products/", ProductRouter);

app.listen(process.env.PORT, () => {
  console.log("SERVER START");
});
