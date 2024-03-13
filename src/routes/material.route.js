const express = require("express");
const router = express.Router();
const materialController = require("../controllers/material.controller");

router.post("/send", materialController.send);

module.exports = router;
