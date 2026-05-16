const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://mdraza8297_db_user:tAtlY8kJV9JpzM8p@cluster0.kcbidcv.mongodb.net/day-7",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}

module.exports = connectToDb;
