const { getComm, getLenght } = require("../model/comments.model");
const { getIdUser } = require("../model/users.model");
const { addComm } = require("../services/comments.services");
const { database } = require("../conn");

module.exports = {
  fetchData: async (req, res) => {
    try {
      const comment = await getComm(database, "Comments", +req.params.video_id);
      // console.log(comment);
      res.json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  add: async (req, res) => {
    try {
      const user = req.body.username;
      const getIdUser_ = await getIdUser(database, "Users", user);
      const length = await getLenght(database, "Comments");

      const add = {
        id: length + 1,
        id_user: getIdUser_,
        comment: req.body.comment,
        video_id: +req.body.video_id,
        timeStamp: new Date(),
      };

      const result = await addComm(database, "Comments", add);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
