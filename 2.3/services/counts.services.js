const fs = require("fs"); //require file system object
const { getCounts, getCountId } = require("../model/count.model");

function countPlay(counts, songid, pathRess) {
  const addCount = getCountId(counts, songid);
  if (addCount === undefined) {
    return "Wrong Id";
  } else {
    const fIdx = counts.findIndex((cs) => cs.id === songid);
    counts[fIdx]["count"] = addCount["count"] + 1;
    fs.writeFileSync(pathRess, JSON.stringify(counts, null, 2));
    return counts[fIdx];
  }
}

function sortedCount(counts, pathCounts) {
  const sortCounts = counts.sort((a, b) => b["count"] - a["count"]);
  fs.writeFileSync(pathCounts, JSON.stringify(sortCounts, null, 2));
  return sortCounts;
}

// addMySong(4);

module.exports = { countPlay, sortedCount };
