const express = require("express");

// Initialize express
const app = express();

// Creating routes
app.get("/", (req, res) => {
  //   res.send("Hello World");
  //   res.send({
  //     id: 1,
  //     name: "Oyinkansola",
  //   });
  res.send("<h1>Hello World</h1>");
});

app.listen(5000, () => console.log("Server running"));
