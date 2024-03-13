const multer = require("multer");
const fs = require("fs");
const path = require("path");
const materialService = require("../services/material.service");

const upload = multer({ dest: "./upload" });

const send = async (req, res, next) => {
  await upload.single("upload")(req, res, (err) => {
    if (err) {
      return next(err);
    }
  });

  const filename = req.file.filename;

  const sql = `INSERT INTO MATERIAL VALUES (null, null, ?, ?, ?)`;

  console.log(filename);

  next(materialService.send(sql, filename));
};

module.exports = {
  send,
};
