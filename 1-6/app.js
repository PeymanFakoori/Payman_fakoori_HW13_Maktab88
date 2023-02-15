const express = require("express");
const path = require("path");
const app = express();

app.get(
  ["/page-1", "/page-2", "/page-3", "/page-4", "/page-5"].forEach((path) => {
    app.get(path, function (req, res) {
      if (path == "/page-1") {
        res.sendFile(`${__dirname}/views/page-1.html`);
      }
      if (path == "/page-2") {
        res.sendFile(`${__dirname}/views/page-2.html`);
      }
      if (path == "/page-3") {
        res.sendFile(`${__dirname}/views/page-3.html`);
      }
      if (path == "/page-4") {
        res.sendFile(`${__dirname}/views/page-4.html`);
      }
      if (path == "/page-5") {
        res.sendFile(`${__dirname}/views/page-5.html`);
      }
    });
  })
);
app.listen(8000);
