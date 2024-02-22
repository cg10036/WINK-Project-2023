const express = require("express");
const router = express.Router();
const studyMateController = require("../controllers/studyMate.controller");

router.post("/offer", studyMateController.offer);

module.exports = router;
