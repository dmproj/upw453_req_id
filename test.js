const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("access-control-allow-origin", "*");
  res.header("access-control-allow-methods", "GET, POST, DELETE");
  res.header("access-control-allow-headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>ET|O GET</h1>");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Received POST request!");
});

app.delete("/", (req, res) => {
  console.log(req.body);
  res.send("Received POST request!");
});

app.listen(3000, () => {
  console.log("back works");
});


