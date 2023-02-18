const express = require("express");
const app = express();

for (let i = 0; i < 6; i++) {
  app.get(`/page-${i}`, function (req, res) {
    res.sendFile(`${__dirname}/views/page-${i}.html`);
  });
}

app.listen(8000);
