const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  fetch("http://localhost:3003/getSongs")
    .then((response) => response.json())
    .then((data) => {
      res.render("index.ejs", { items: data });
    })
    .catch((err) => console.error(err));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
