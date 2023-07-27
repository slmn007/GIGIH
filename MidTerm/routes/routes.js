const express = require("express");

const router = express.Router();

const videosController = require("../controller/videos.controller");
const productsController = require("../controller/products.controller");
const commentsController = require("../controller/comments.controller");

router.get("/getAllVideo", videosController.fetchAllData);

router.get("/getProduct/:video_id", productsController.fetchData);

router.get("/getComm/:video_id", commentsController.fetchData);

router.post("/addComm", commentsController.add);

module.exports = router;
