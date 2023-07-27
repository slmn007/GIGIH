async function getAllVideo(conn, nameCol) {
  const collection = conn.db.collection(nameCol);
  try {
    return await collection.find({}).toArray();
  } catch (error) {
    console.log(error);
  }
}

async function getVideo(conn, nameCol, idv) {
  const collection = conn.db.collection(nameCol);
  try {
    return await collection.find({ id: idv }).toArray();
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getAllVideo, getVideo };
