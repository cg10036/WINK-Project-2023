const express = require("express");
const authHelper = require("../helpers/auth.helper");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/material", require("./material.route.js"));
router.use(authHelper.middleware);
router.use("/me", require("./me.route"));
router.use("/ping", require("./ping.route"));
router.use("/studymate", require("./studyMate.route"));

module.exports = router;
