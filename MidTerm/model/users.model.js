async function getIdUser(conn, nameCol, username_) {
  const collection = conn.db.collection(nameCol);
  console.log(collection);
  try {
    const user = await collection.find({ username: username_ }).toArray();
    const id_user = user[0].id;
    return id_user;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getIdUser };
