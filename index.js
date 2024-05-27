const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authenticationRouter = require("./routes/authenticate.js");
const postRouter = require("./routes/post.js");
const userRouter = require("./routes/user.js");
const app = express();
require("./db.js");

//middleware setup

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/login", authenticationRouter);
app.use("/user",userRouter)
app.use("/posts", postRouter);

app.listen(3000, () => console.log("App is Started on Port 3000"));
