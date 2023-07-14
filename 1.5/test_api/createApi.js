const express = require("express"); // requre the express framework
const app = express();
const fs = require("fs"); //require file system object
const port = 3003;
const cors = require("cors");

app.use(express.static("public"));

app.use(cors());

app.use(express.json({ limit: "50MB" }));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/getSongs", (req, res) => {
  fs.readFile("./listSong.json", "utf8", (err, data) => {
    // console.log(data);
    res.end(data);
  });
});

app.get("/getMySongs", (req, res) => {
  fs.readFile("./myPlaylist.json", "utf8", (err, data) => {
    // console.log(data);
    res.end(data);
  });
});

app.post("/addMySong/:id", (req, res) => {
  const datas = fs.readFileSync("./listSong.json");
  const myDatas = fs.readFileSync("./myPlaylist.json");

  // console.log(datas);
  const datas_ = JSON.parse(datas);
  const myDatas_ = JSON.parse(myDatas);

  const idData = "id" + req.params.id;
  // console.log(idData);
  const myData = datas_[idData];
  // console.log(myData);
  myDatas_[idData] = myData;
  fs.writeFileSync("myPlaylist.json", JSON.stringify(myDatas_, null, 2));
  // console.log(test);
  res.end(JSON.stringify(myDatas_, null, 2));
});

app.get("/playSong/:id", (req, res) => {
  const datas = fs.readFileSync("./myPlaylist.json");
  const datas_ = JSON.parse(datas);

  const idData = "id" + req.params.id;
  const song = datas_[idData]["url"];
  // console.log(song);
  res.end(song);
});

// Create a server to listen at port 8080
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
