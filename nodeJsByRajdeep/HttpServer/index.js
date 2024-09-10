const http = require("http");
const fs = require("fs");
const eventEmitter = require("events");

console.log(__dirname);
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    console.log(req.url);
    res.end("Hello from other side");
  } else if (req.url == "/about") {
    console.log(req.url);
    res.end("Hello from About side");
  } else if (req.url == "/userApi") {
    res.writeHead(200, { "content-type": "application/json" });
    fs.readFile(`${__dirname}/UserApi/userApi.json`, "utf-8", (err, data) => {
      if (err) {
        console.error(`Error reading UserApi.json file: ${err}`);
        // Respond with an error message if needed
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      // Send the data back to the client
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("404 not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listing to the port number 3000");
});
