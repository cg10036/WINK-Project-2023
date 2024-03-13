const path = require("path");
const materialService = require("../services/material.service");

const upload = multer({ dest: "./upload" });

const send = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const file = req.body.file;
  const professor = req.body.professor;
  next(materialService.send(req.user.id, title, content, file, professor));
};

module.exports = {
  send,
};
