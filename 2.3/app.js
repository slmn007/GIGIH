const express = require("express"); // requre the express framework
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(cors());
app.use(express.json({ limit: "50MB" }));
app.use(express.urlencoded({ extended: true }));

require("./controller/songs.controller")(app);
