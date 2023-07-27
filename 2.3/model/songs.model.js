const fs = require("fs"); //require file system object

function getSongs(pathSongs) {
  const datas = fs.readFileSync(pathSongs);
  const parsData = JSON.parse(datas);
  return parsData;
}

function getSongId(songs, id) {
  return songs.find((s) => s.id === id);
}

function getSrcSong(songs, id) {
  const song = getSongId(songs, id);
  return song["url"];
}

// const a = getSongs("../public/src/jsons/listSong.json");
// const b = getMusic(a, 1);
// console.log(b);

module.exports = {
  getSongs,
  getSongId,
  getSrcSong,
};
