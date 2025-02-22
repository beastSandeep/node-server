const express = require("express");
const fs = require("node:fs");
const app = express();

const textPath = "D:/Server/express/text.txt";

// all routes
app.get("/", (req, res) => {
  const data = { name: "myName", location: "USA" };
  res.status(200).json(data);
});

app.get("/ollie", (req, res) => {
  res.status(200).json({ name: "ollie", home: "USA", owner: "ghotra family" });
});

app.get("/readFile", (req, res) => {
  // reading file and stroring data into a constant
  const data = fs.readFileSync(textPath, {
    encoding: "utf-8",
  });

  // sending response with data
  res.status(200).json({ result: data });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
