const path = require("path");
const express = require('express');
const router = express.Router();
const igdbRoutes = require("./igdb");
const listRoutes = require("./savedList")

router.use('/igdb', igdbRoutes);
router.use('/savedList', listRoutes);

// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));  // change to /client/build later
// });

module.exports = router;