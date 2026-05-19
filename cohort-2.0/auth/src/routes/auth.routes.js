const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// User registration route - [POST] /api/auth/register
authRouter.post("/register", async (req, res) => {
  // Collecting form data
  const { name, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({ email });

  // Check if user already exists with the provided email
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email id",
    });
  }

  // Hashed the plain password
  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  // Creating the user
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  // Creating the JWT token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  // Set the cookie in the cookie storage
  res.cookie("jwt_token", token);

  // send the success status
  res.status(201).json({
    message: "User registered successfully",
    jwt_token: token,
    user: user,
  });
});

// Verify mee with jwt_token
authRouter.get("/get-mee", async (req, res) => {
  try {
    const token = req.cookies.jwt_token;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    // const user = await userModel.findOne({ _id: verifyToken.id });
    const user = await userModel.findById(verifyToken.id);

    res.status(200).json({
      message: "Token verified successfully",
      user: user.name,
    });
  } catch (error) {
    return res.status(409).json({
      message: "Token not verified",
      error: error.message,
    });
  }
});

// Login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(409).json({
      message: "User not found",
    });
  }

  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  if (user.password === hashedPassword) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res.cookie("jwt_token", token);

    res.status(200).json({
      message: "Login successfull",
      jwt_token: token,
      user: user.name,
    });
  }
});

module.exports = authRouter;
