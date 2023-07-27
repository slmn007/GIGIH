const { getProduct } = require("../model/products.model");
const { database } = require("../conn");

module.exports = {
  fetchData: async (req, res) => {
    try {
      const product = await getProduct(
        database,
        "Products",
        +req.params.video_id
      );
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
