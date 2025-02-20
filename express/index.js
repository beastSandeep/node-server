const express = require("express");
const app = express();

// all routes
app.get("/", (req, res) => {
  const data = { name: "myName", location: "USA" };
  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
