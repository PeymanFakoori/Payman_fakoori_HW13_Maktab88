const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Home Rout!");
});
app.get("/about", (req, res) => {
  res.send("About Rout!");
});
app.get("/contact", (req, res) => {
  res.send("Contact Rout!");
});
app.get("/", (req, res) => {
  res.send("Root Rout!");
});
app.get("*", (req, res) => res.send("Not Found!"));

app.listen(8000);
