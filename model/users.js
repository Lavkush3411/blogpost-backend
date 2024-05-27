const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = new mongoose.model("user", UserModel);

module.exports = User;
