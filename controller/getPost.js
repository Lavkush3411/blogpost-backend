const Post = require("../model/posts");

async function getPost(req, res) {
  const posts = await Post.find().lean();
  res.send(posts);
}

module.exports = getPost;
