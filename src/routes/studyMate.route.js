const express = require("express");
const router = express.Router();
const studyMateController = require("../controllers/studyMate.controller");

router.post("/offer", studyMateController.offer);
router.get("/posts", studyMateController.posts);
router.get("/detail", studyMateController.detail);

module.exports = router;
