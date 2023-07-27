const { getAllVideo } = require("../model/videos.model");
const { database } = require("../conn");

module.exports = {
  fetchAllData: async (req, res) => {
    try {
      const videos = await getAllVideo(database, "Videos");
      res.json(videos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
