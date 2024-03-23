import express from "express";
import User from "../models/User.js";
import md5 from "js-md5";

export const UserRouter = express.Router();

UserRouter.patch("/edit_user", async (req, res) => {
  const { username } = req.query;

  if (req.session.userId != null) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    if (user === null) {
      res.status(400);
    } else {
      user.username = username;
      user.save();
    }
    res.json(user);
  } else {
    res.status(403);
  }
});

UserRouter.delete("/delete_user", async (req, res) => {
  const { id } = req.query;
  const user = await User.destroy({ where: { id: id } });
  res.json({});
});

UserRouter.post("/add_user", async (req, res) => {
  const { username, email, password } = req.query;
  await User.create({
    username: username,
    email: email,
    password: md5(password),
  });
  res.json({});
});

UserRouter.post("/login", async (req, res) => {
  const { username, password } = req.query;
  const user = await User.findOne();

  if (user !== null) {
    if (user.password == md5(password)) {
      req.session.userId = user.id;
    } else {
      console.log("zle hasło");
    }
  } else {
    console.log("User nie istnieje");
  }

  res.json({
    session: req.session,
  });
});

UserRouter.get("/get_my_info", async (req, res) => {
  if (req.session.userId != null) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.json(user);
  } else {
    res.status(403);
  }
});
