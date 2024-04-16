import express from "express";
import { User } from "../models/User.js";

export const UserRouter = express.Router();

UserRouter.get("/info", async (req, res) => {
	if (req.session.userId != null) {
		const user = await User.findOne({ where: { id: req.session.userId } });
		res.json(user);
	}
	res.json({});
});
