const express = require("express");
const app = express();
const path = require("path");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./404.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
