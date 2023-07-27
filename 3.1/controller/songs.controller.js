const { getSongs, getSrcSong } = require("../model/songs.model");
const { getCounts } = require("../model/count.model");
const { addMySong } = require("../services/songs.services");
const { countPlay, sortedCount } = require("../services/counts.services");

const port = 3006;

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!!!");
  });

  app.get("/getSongs", (req, res) => {
    res.status(200).json(getSongs("public/src/jsons/listSong.json"));
  });

  app.get("/getMySongs", (req, res) => {
    res.status(200).json(getSongs("public/src/jsons/myPlaylist.json"));
  });

  app.post("/addMySong/:id", (req, res) => {
    try {
      const songs = getSongs("public/src/jsons/listSong.json");
      const mySongs = getSongs("public/src/jsons/myPlaylist.json");
      const songId = +req.params.id;
      res
        .status(201)
        .json(
          addMySong(songs, mySongs, songId, "public/src/jsons/myPlaylist.json")
        );
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/playSong/:id", (req, res) => {
    try {
      const songs = getSongs("public/src/jsons/listSong.json");
      const songId = +req.params.id;
      res.status(200).json(getSrcSong(songs, songId));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/countPlay/:id", (req, res) => {
    try {
      const counts = getCounts("public/src/jsons/listSong.json");
      const songId = +req.params.id;
      res
        .status(201)
        .json(countPlay(counts, songId, "public/src/jsons/listSong.json"));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get("/sortedSongs", (req, res) => {
    const songs = getSongs("public/src/jsons/listSong.json");
    res.status(200).json(sortedCount(songs, "public/src/jsons/countPlay.json"));
  });

  // Create a server to listen at port 8080
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
