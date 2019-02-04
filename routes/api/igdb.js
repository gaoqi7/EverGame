const router = require("express").Router();
const igdbController = require("../../controllers/igdbController");

// "/api/igdb"
router.route("/")
  .get(igdbController.search);

module.exports = router;
