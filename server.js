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
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  /*
    Get the id passed from the url. req.params returns a string,
    so using parseInt() converts it into a number
  */
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      msg: "Post not found",
    });
  }

  res.status(200).json(post);
});

app.listen(port, () => console.log("Server running"));
