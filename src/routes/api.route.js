const express = require("express");
const authHelper = require("../helpers/auth.helper");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use(authHelper.middleware);
router.use("/ping", require("./ping.route"));
router.use("/studymate", require("./studyMate.route"));
router.use("/material", require("./material.route.js"));

module.exports = router;
