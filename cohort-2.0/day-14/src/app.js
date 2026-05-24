const express = require("express");
const cookieParser = require("cookie-parser");

// Require routed
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Using routes
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/users", userRouter);

module.exports = app;
