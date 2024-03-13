const express = require("express");
const router = express.Router();
const authHelper = require("../helpers/auth.helper");
const materialController = require("../controllers/material.controller");

router.get("/pdf", materialController.pdf);
router.use(authHelper.middleware);
router.post("/send", materialController.send);
router.get("/posts", materialController.posts);
router.get("/detail", materialController.detail);

module.exports = router;
