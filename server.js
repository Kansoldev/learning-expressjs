import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";

const port = process.env.PORT || 8080;

// Initialize express
const app = express();

// Body parser middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

// Using the logger middleware at the app level
app.use(logger);

// Setting up a static server in Express for loading static files
// app.use(express.static(path.join(__dirname, "public")));

// Using the posts route
app.use("/api/posts", posts);

app.listen(port, () => console.log("Server running"));
