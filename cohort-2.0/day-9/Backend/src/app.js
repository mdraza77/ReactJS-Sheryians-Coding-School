const express = require("express");
const app = express();
const noteModel = require("./models/note.model");
const cors = require("cors");
const path = require("path");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

// Create Note [POST]
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });

  res.status(200).json({
    message: "Note Created Successfully",
    note: note,
  });
});

// Get Notes [GET]
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Notes Fetched Successfully",
    notes,
  });
});

// Delete Note [DELETE]
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Note Deleted Successfully",
  });
});

// Update Note [PATCH]
app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "Note Updated Successfully",
  });
});

// Wild Card
app.use("*name", (req, res) => {
  // console.log(__dirname);
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
