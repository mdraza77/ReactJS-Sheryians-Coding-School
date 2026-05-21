const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "post",
    folder: "insta-clone",
  });

  const jwt_token = req.cookies.jwt_token;

  if (!jwt_token) {
    return res.status(401).json({
      message: "Access denied, Token not provided",
    });
  }

  let verify_jwt_token = null;

  try {
    verify_jwt_token = jwt.verify(jwt_token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
      error: error.message,
    });
  }

  const post = await postModel.create({
    caption: req.body.caption,
    image_path: file.url,
    user: verify_jwt_token.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
};

const getPostController = async (req, res) => {
  const jwt_token = req.cookies.jwt_token;
  let verify_jwt_token;
  try {
    verify_jwt_token = jwt.verify(jwt_token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized access",
      error: error.message,
    });
  }
  const userId = verify_jwt_token.id;

  const posts = await postModel.find({ user: userId });

  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts,
  });
};

const getPostDetailsController = async (req, res) => {
  const jwt_token = req.cookies.jwt_token;

  if (!jwt_token) {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  let verify_jwt_token;

  try {
    verify_jwt_token = await jwt.verify(jwt_token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
      error: error.message,
    });
  }

  const userId = verify_jwt_token.id;
  const postId = req.params.postId;
  const post = await postModel.findById({ _id: postId });

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = post.user.toString() === userId; // Because object and string

  if (!isValidUser) {
    res.status(403).json({
      message: "Not created by you",
    });
  }

  return res.status(200).json({
    message: "Post fetched successfully",
    post,
  });
};

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
