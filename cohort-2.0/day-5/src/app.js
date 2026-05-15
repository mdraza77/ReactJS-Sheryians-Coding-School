const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

// Home
app.get("/", (req, res) => {
  res.send("Running");
});

// POST - Create Note
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    // Client to Server so 201
    message: "Note Created Successfully",
  });
});

// GET - GET Notes
app.get("/notes", (req, res) => {
  res.status(200).json({
    // Server to Slient so 200
    message: "Notes Viewing",
    notes: notes,
  });
});

// DELETE - Delete Notes
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(200).json({
    // 204 will not show message so use 2300
    message: "Note Deleted Successfully",
  });
});

// PATCH - Update Notes - Single field
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.status(200).json({
    message: "Note Updated Successfully",
  });
});

module.exports = app;
