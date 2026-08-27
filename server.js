const express = require("express");
const path = require("path");

// Initialize express
const app = express();

// Creating routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(5000, () => console.log("Server running"));
