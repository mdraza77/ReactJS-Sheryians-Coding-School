const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

postRouter.post(
  "/",
  upload.single("image_path"),
  postController.createPostController,
);

postRouter.get("/", postController.getPostController);

postRouter.get("/details/:postId", postController.getPostDetailsController);

module.exports = postRouter;
