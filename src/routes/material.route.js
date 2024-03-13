const express = require("express");
const router = express.Router();
const materialController = require("../controllers/material.controller");

router.post("/send", materialController.send);
router.get("/posts", materialController.posts);

module.exports = router;
