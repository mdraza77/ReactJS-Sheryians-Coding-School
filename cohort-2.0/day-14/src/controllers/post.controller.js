const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  const file = await imageKit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "post",
    folder: "insta-clone",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    image_path: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
};

const getPostController = async (req, res) => {
  const userId = req.user.id;

  const posts = await postModel.find({ user: userId });

  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts,
  });
};

const getPostDetailsController = async (req, res) => {
  const userId = req.user.id;
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

const likePostController = async (req, res) => {
  // Get username from identifyUser middleware
  const username = req.user.username;
  // Get postId from the url
  const postId = req.params.postId;

  // Check if the post exists
  const isPostExists = await postModel.findById(postId);

  if (!isPostExists) {
    return res.status(404).json({
      message: "Post not exisits",
    });
  }

  // Create like row
  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  // Return the response
  res.status(201).json({
    message: "Post liked",
    like: like,
  });
};

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
};
