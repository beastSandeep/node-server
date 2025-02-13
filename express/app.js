const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug"); /// npm i pug
app.set("views", path.resolve(__dirname, "./views"));

//Serving static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
  res.status(200).render("index");
});

app.post("/upload", (req, res) => {
  console.log(req.body);
  res.end("done");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
