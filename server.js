const express = require("express");
const path = require("path");

// Initialize express
const app = express();

// Setting up a static server in Express for loading static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log("Server running"));
