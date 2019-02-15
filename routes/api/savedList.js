const router = require("express").Router();
const savedListController = require("../../controllers/savedListController")

router.route("/test")
    .post(savedListController.test);

router.route("/populate")
    .post(savedListController.populate);

module.exports = router;