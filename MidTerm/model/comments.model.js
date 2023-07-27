async function getComm(conn, nameCol, idv) {
  const collection = conn.db.collection(nameCol);
  try {
    // const com = await collection.find({ id: idv }).toArray();
    const com = await collection
      .aggregate([
        {
          $match: {
            video_id: idv,
          },
        },
        {
          $lookup: {
            from: "Users",
            localField: "id_user",
            foreignField: "id",
            as: "detailUser",
          },
        },
        {
          $unwind: {
            path: "$detailUser",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $unset: [
            "detailUser.password",
            "detailUser.created_at",
            "detailUser.updated_at",
          ],
        },
      ])
      .toArray();
    return com;
  } catch (error) {
    console.log(error);
  }
}

async function getLenght(conn, nameCol) {
  const collection = conn.db.collection(nameCol);
  return await collection.countDocuments();
}
module.exports = { getComm, getLenght };
