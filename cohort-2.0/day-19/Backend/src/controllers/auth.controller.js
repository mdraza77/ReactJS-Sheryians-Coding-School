const userModel = require("../models/user.model");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { name, username, email, password, bio, profile_picture } = req.body;

  //   const isUserExistsByEmail = await userModel.findOne({ email });
  //   if (isUserExistsByEmail) {
  //     return res.status(409).json({
  //       message: "User already exists with this email id",
  //     });
  //   }

  //   const isUserExistsByUsername = await userModel.findOne({ username });
  //   if (isUserExistsByUsername) {
  //     return res.status(409).json({
  //       message: "User already exists with this username",
  //     });
  //   }

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  //   const hashedPassword = crypto
  //     .createHash("sha256")
  //     .update(password)
  //     .digest("hex");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    username,
    email,
    password: hashedPassword,
    bio,
    profile_picture,
  });

  const jwt_token = jwt.sign(
    { id: user._id, email: user.emal, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("jwt_token", jwt_token);

  res.status(201).json({
    message: "User registered successfully",
    jwt_token: jwt_token,
    user: {
      name: user.name,
      email: user.email,
      username: user.username,
      bio: user.bio,
    },
  });
};

const loginController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      {
        username: username,
      },
      {
        email: email,
      },
    ],
  });

  if (!user) {
    return res.status(404).json({
      message: "User does not exists",
    });
  }

  //   const hashedPassword = crypto
  //     .createHash("sha256")
  //     .update(password)
  //     .digest("hex");

  //   const isPasswordValid = user.password === hashedPassword;

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const jwt_token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("jwt_token", jwt_token);

  res.status(200).json({
    message: "Login successfull",
    jwt_token: jwt_token,
    user: {
      name: user.name,
      email: user.email,
      username: user.username,
      bio: user.bio,
    },
  });
};

const getMeController = async (req, res) => {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  res.status(200).json({
    message: "User fetched successfullt",
    user: {
      name: user.username,
      email: user.email,
    },
  });
};

module.exports = { registerController, loginController, getMeController };
