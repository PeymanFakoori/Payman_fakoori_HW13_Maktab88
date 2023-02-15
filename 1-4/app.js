const express = require("express");
const app = express();

// app.get("/home", (req, res) => {
//   res.send(`<h3>home page</h3>`);
// });

app.get("/home", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
app.get("/picture", (req, res) => {
  res.sendFile(`${__dirname}/views/wonder.jpg`);
});

app.listen(8000);
