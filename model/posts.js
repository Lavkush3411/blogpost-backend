const mongoose = require("mongoose");

const PostModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: String, required: true },
  status: { type: String, required: true },
});

const Post = new mongoose.model("post", PostModel);

module.exports = Post;
