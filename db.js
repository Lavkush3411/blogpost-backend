const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGO_USERNAME);
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.umtixnz.mongodb.net/blogpost`;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connection sucessfull with database"));
