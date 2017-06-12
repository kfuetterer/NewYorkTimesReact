var express = require("express");
var articlesController = require("../controllers/articlesController");
var router = new express.Router();

router.get("/articles/:id?", articlesController.index);
router.post("/articles", articlesController.create);
router.delete("/articles/:id", articlesController.destroy);
module.exports = router;