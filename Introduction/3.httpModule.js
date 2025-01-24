const http = require("node:http");
const port = 8000;
// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
      name: req.url.split("=")[1],
    })
  );
});

server.listen(port);
