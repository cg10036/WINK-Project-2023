const path = require("path");
const materialService = require("../services/material.service");

const send = async (req, res, next) => {
  const { title, content, file, professor, type, keyword, note } = req.body;
  return next(
    await materialService.send(
      req.user.id,
      title,
      content,
      file,
      professor,
      type,
      keyword,
      note
    )
  );
};

module.exports = {
  send,
};
