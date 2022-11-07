const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = process.env.PORT || 8080;

const displayContent = function (file, res) {
  fs.readFile(file, "utf-8", (error, data) => {
    if (error) throw error;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    displayContent("./index.html", res);
  } else if (req.url === "/about") {
    displayContent("./about.html", res);
  } else if (req.url === "/contact-me") {
    displayContent("./contact-me.html", res);
  } else {
    displayContent("./404.html", res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
