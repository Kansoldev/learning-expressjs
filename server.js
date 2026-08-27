const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

// Initialize express
const app = express();

// Setting up a static server in Express for loading static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log("Server running"));
