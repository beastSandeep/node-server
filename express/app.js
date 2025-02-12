const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", function (req, res) {
  res
    .status(200)
    .render("index", { t: "my dynamic title", m: "anything", value: 10 });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
