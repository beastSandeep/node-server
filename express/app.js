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

app.post("/createBlogs", (req, res) => {
  console.log(req.query);
  const sum = Number(req.query.num1) + Number(req.query.num2);
  res.end(String(sum));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
