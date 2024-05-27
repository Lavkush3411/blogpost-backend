const express = require("express");
const Post = require("../model/posts");
const User = require("../model/users");

const jwt = require("jsonwebtoken");

const authenticationRouter = express.Router();

authenticationRouter.post("/", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body.data;
  console.log(email, password);
  const user = await User.findOne({ email: email });
  if (!user)
    res.send({ msg: "no user found", isAuthenticated: false }).status(404);
  if (password === user.password) {
    res.send({ isAuthenticated: true, msg: "succss" }).status(200);
  } else {
    res.send({ msg: "no user found", isAuthenticated: false }).status(404);
  }
});

module.exports = authenticationRouter;
