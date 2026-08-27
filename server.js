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
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  /*
    Get the id passed from the url. req.params returns a string,
    so using parseInt() converts it into a number
  */
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log("Server running"));
