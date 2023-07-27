async function addComm(conn, nameCol, add) {
  const collection = conn.db.collection(nameCol);
  try {
    return await collection.insertOne(add);
  } catch (error) {
    console.log(error);
  }
}
module.exports = { addComm };
