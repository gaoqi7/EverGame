const router = require("express").Router();
const igdbController = require("../../controllers/igdbController");


// "/api/search"
router.route("/")
    .post(igdbController.search);


module.exports = router;
