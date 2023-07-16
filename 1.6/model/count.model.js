const fs = require("fs"); //require file system object

function getCounts(pathCounts) {
  const datas = fs.readFileSync(pathCounts);
  const parsData = JSON.parse(datas);
  return parsData;
}

function getCountId(counts, id) {
  return counts.find((cs) => cs.id === id);
}

module.exports = {
  getCounts,
  getCountId,
};
