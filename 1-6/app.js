const express = require("express");
const app = express();

// for (let i = 0; i < 6; i++) {
//   app.get(`/page-${i}`, function (req, res) {
//     res.sendFile(`${__dirname}/views/page-${i}.html`);
//   });
// }

app.get("/:page", (req, res) => {
  const page = req.params.page;
  res.sendFile(`${__dirname}/views/${page}.html`);
});

app.listen(8000);
