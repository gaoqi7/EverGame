const router = require("express").Router();
const igdbController = require("../../controllers/igdbController");

// "/api/igdb/:name"
// return axios.get("/api/igdb/:name", { params: { q: "title:" + q } });
router.route("/:name")
  .get(igdbController.search);

module.exports = router;
