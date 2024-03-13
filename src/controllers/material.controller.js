const materialService = require("../services/material.service");

const send = async (req, res, next) => {
  const { title, content, file, professor, type, keyword, note, semester } =
    req.body;
  return next(
    await materialService.send(
      req.user.id,
      title,
      content,
      file,
      professor,
      type,
      keyword,
      note,
      semester
    )
  );
};

const posts = async (req, res, next) => {
  return next(await materialService.posts());
};

module.exports = {
  send,
  posts,
};
