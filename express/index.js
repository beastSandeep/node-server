const express = require("express");
const fs = require("node:fs");
const path = require("node:path");
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

// ------------------------------------------------------------file api's

app.get("/file", (req, res) => {
  const data = fs.readFileSync(textPath, { encoding: "utf-8" });
  res.status(200).json({ result: data });
});

app.post("/file", (req, res) => {
  const data = req.query.name;
  fs.writeFileSync(textPath, data);
  res.status(201).json({ message: "file wrote successfuly" });
});

app.delete("/file", (req, res) => {
  fs.writeFileSync(textPath, "");
  res.status(201).json({ message: "file cleared successfuly" });
});

app.patch("/file", (req, res) => {
  const data = req.query.name;
  fs.appendFileSync(textPath, data);
  res.status(201).json({ message: "file append successfuly" });
});

app.post("/createFile", (req, res) => {
  const fileName = req.query.fileName;
  const filePath = path.resolve(__dirname + "/" + fileName);
  fs.openSync(filePath, "w");

  res.status(201).json({ message: "file created successfuly" });
});

app.delete("/deleteFile", (req, res) => {
  const fileName = req.query.fileName;
  const filePath = path.resolve(__dirname + "/" + fileName);
  fs.unlinkSync(filePath);

  res.status(200).json({ message: "file deleted successfuly" });
});

app.put("/renameFile", (req, res) => {
  const oldPath = path.resolve(__dirname + "/" + req.query.oldFile); // text.txt
  const newPath = path.resolve(__dirname + "/" + req.query.newFile); // manni.txt
  fs.renameSync(oldPath, newPath);

  res.status(200).json({ message: "Rename changed successfully" });
});

// ------------------------------------------------------------file api's

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
