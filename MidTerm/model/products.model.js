async function getProduct(conn, nameCol, idv) {
  const collection = conn.db.collection(nameCol);
  try {
    return await collection.find({ id: idv }).toArray();
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getProduct };
