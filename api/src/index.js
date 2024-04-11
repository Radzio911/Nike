import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./db.js";
import { UserRouter } from "./routers/UserRouter.js";
import { ProductRouter } from "./routers/ProductRouter.js";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

sequelize.sync().then(() => {
	console.log("DATABASE IS READY");
});

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(cookieParser());

app.use(bodyParser.json());

app.use(
	session({
		secret: "Some secret key",
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: true,
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }));

app.use("/users/", UserRouter);
app.use("/products/", ProductRouter);

app.listen(process.env.PORT, () => {
	console.log("SERVER START");
});
