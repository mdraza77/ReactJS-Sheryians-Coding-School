const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Database connected");
  } catch (error) {
    console.log("Failed to connect with MongoDB database");
  }
};

module.exports = connectToDB;
