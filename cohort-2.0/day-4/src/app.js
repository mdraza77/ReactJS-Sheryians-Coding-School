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
  console.log(req.body);
  notes.push(req.body);
  res.send("Note Created");
});

// GET - GET Notes
app.get("/notes", (req, res) => {
  console.log(notes);
  res.send(notes);
});

// DELETE - Delete Notes
app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  console.log(req.params.index);
  res.send("Note Deleted");
});

// PATCH - Update Notes - Single field
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  console.log(notes[req.params.index]);
  res.send("Note Updated");
});

module.exports = app;
