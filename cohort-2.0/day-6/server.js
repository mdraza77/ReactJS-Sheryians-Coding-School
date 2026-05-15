const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.kcbidcv.mongodb.net/day-6",
    )
    .then(() => {
      console.log("Connected to Database");
    });
}

connectToDb();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
