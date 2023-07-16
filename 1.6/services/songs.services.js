const fs = require("fs"); //require file system object
const { getSongId } = require("../model/songs.model");

function addMySong(songs, mySongs, songid, pathRess) {
  const mySong = getSongId(mySongs, songid);
  if (mySong === undefined) {
    const song = getSongId(songs, songid);
    // console.log(getS);
    mySongs.push(song);
    fs.writeFileSync(pathRess, JSON.stringify(mySongs, null, 2));
    return "The songs has success added in your playlist";
  } else {
    return "The songs has already in your playlist";
  }
}

// addMySong(4);

module.exports = { addMySong };
