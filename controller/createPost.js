const { json } = require("body-parser");
const Post = require("../model/posts");

async function createPost(req, res) {
  const post = req.body.data;
  if (!post) res.send({ Error: "Invalid data" }).status(400);
  try {
    const response = await Post.create(post);
    res.send({ Msg: "Successfully Created" }).status(200);
  } catch (e) {
    console.log(e);
    res.send({ err: e }).status(400);
  }
}

module.exports = createPost;
