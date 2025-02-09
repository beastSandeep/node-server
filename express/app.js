const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("about page is here");
});

app.get("/blogs", function (req, res) {
  res.send("here is my blogs");
});

app.post("/createBlogs/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  const sum = Number(req.query.num1) + Number(req.query.num2);
  res.status(201).send(`your id is ${req.params.id} and sum is ${sum}`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
