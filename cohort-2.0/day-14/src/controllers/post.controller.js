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

module.exports = { createPostController };
