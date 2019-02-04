// const path = require("path");
const express = require('express');
const router = express.Router();
const userRoutes = require("./users");
const igdbRoutes = require("./igdb");

router.use('/users', userRoutes);
router.use('/igdb', igdbRoutes);

// default path
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;