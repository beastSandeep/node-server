const express = require("express");
const path = require("path");
const { mongoose, Schema } = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/class");
const StudentModel = mongoose.model(
  "detail",
  new Schema({ name: String, age: Number })
);

app.post("/createStudent", async (req, res) => {
  await StudentModel.create({
    name: req.query.name,
    age: Number(req.query.age),
  });
  res.end("done");
});

app.get("/myStudents", async (req, res) => {
  const studens = await StudentModel.find();
  res.status(200).json(studens);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
