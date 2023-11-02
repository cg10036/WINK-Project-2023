const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/ping", require("./ping.route"));

module.exports = router;
