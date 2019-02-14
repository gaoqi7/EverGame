const router = require("express").Router();
const savedListController = require("../../controllers/savedListController")

router.route("/test")
    .post(savedListController.test);

module.exports = router;