const express = require("express");
const app = express();
const users = require("./user-data.json");

app.get("/get-all-users", function (req, res) {
  res.send(users);
});

app.get("/admins", function (req, res) {
  res.json(users.filter((user) => user.role === "admin"));
});

app.listen(8000);
