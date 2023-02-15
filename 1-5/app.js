const express = require("express");
const app = express();

app.get("/page-1", function (_req, res) {
  res.sendFile(`${__dirname}/views/page-1.html`);
});
app.get("/page-2", function (_req, res) {
  res.sendFile(`${__dirname}/views/page-2.html`);
});
app.get("/page-3", function (_req, res) {
  res.sendFile(`${__dirname}/views/page-3.html`);
});
app.get("/page-4", function (_req, res) {
  res.sendFile(`${__dirname}/views/page-4.html`);
});
app.get("/page-5", function (_req, res) {
  res.sendFile(`${__dirname}/views/page-5.html`);
});

app.listen(8000);
