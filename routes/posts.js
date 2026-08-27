import express from "express";
const router = express.Router();

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

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
router.get("/:id", (req, res) => {
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

// Create new post
router.post("/create", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body?.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "Please include a title" });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Update post
router.put("/update/:id", (req, res) => {
  // Get the id of the post
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "Post doesn't exists" });
  }

  post.title = req.body?.title || post.title;
  res.status(200).json(posts);
});

// Delete post
router.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "Post doesn't exists" });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
