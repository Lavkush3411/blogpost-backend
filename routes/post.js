const express = require("express");
const getPost = require("../controller/getPost");
const updatePost = require("../controller/updatePost");
const createPost = require("../controller/createPost");
const Post = require("../model/posts");

const postRouter = express.Router();

postRouter.get("/get", getPost);
postRouter.post("/create", createPost);
postRouter.post("/update", updatePost);

postRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Post.findByIdAndDelete(id);
  res.send();
});

module.exports = postRouter;
