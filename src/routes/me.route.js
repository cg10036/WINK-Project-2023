const express = require("express");
const router = express.Router();
const meController = require("../controllers/me.controller");

router.get("/", meController.info);

module.exports = router;
