const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connedted to Database");
  } catch (error) {
    console.log("Error while connecting to Database", error);
  }
};

module.exports = connectToDb;
