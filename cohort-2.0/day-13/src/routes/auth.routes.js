const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    token: token,
    user: user,
  });
});

authRouter.get("/protected", async (req, res) => {
  res.status(200).json(req.cookies);
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User not found with this email",
    });
  }

  const isPasswordMatched =
    (await user.password) ===
    crypto.createHash("md5").update(password).digest("hex");

  if (!isPasswordMatched) {
    return res.status(404).json({
      message: "Wrong password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "Login successfull",
    jwt_token: token,
    user: user,
  });
});

module.exports = authRouter;
