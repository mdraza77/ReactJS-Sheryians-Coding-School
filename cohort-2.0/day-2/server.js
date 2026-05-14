const express = require("express");

const app = express(); // Server instance created

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
//   console.log("Running");
}); // Server Started
