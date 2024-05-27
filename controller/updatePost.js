const Post = require("../model/posts");

async function updatePost(req, res) {
  const post = req.body.data;
  if (!post) res.send({ Error: "Invalid data" }).status(400);
  try {
    const response = await Post.findByIdAndUpdate(post._id, { ...post });
    res.send({ msg: "Successfully Update" }).status(200);
  } catch (e) {
    res.send({ msg: e.msg }).status(400);
  }
}

module.exports = updatePost;
