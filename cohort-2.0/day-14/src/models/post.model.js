const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  caption: {
    type: String,
    default: "",
  },
  image_path: {
    type: String,
    required: [true, "Image is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: [true, "User id is required"],
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
