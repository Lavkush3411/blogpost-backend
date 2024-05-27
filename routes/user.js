const express = require("express");
const User = require("../model/users");
const userRouter = express.Router();

userRouter.post("/create", async (req, res) => {
  const user = req.body.data;
  if (!user) {
    res.send({ msg: "empty user data" });
    return;
  }
  const checkUser = await User.find({ email: user.email });
  if (checkUser.length === 0) {
    await User.create(user);
    res.send({ msg: "successfully created" }).status(200);
  } else {
    res.send({ msg: "User already exists Please Login" }).status(400);
  }
});

module.exports = userRouter;
