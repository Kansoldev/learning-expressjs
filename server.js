import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const port = process.env.PORT || 8080;

// Initialize express
const app = express();

// Setting up a static server in Express for loading static files
// app.use(express.static(path.join(__dirname, "public")));

// Using the posts route
app.use("/api/posts", posts);

app.listen(port, () => console.log("Server running"));
