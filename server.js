const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

// Initialize express
const app = express();

// Setting up a static server in Express for loading static files
// app.use(express.static(path.join(__dirname, "public")));

// Using static posts data
let posts = [
  {
    id: 1,
    title: "Post one",
  },
  {
    id: 2,
    title: "Post two",
  },
  {
    id: 3,
    title: "Post three",
  },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  // Specific json method for sending data as json
  res.json(posts);
});

app.listen(port, () => console.log("Server running"));
