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

const detail = async (req, res, next) => {
  let { id } = req.query;
  return next(await materialService.detail(id));
};

const pdf = async (req, res, next) => {
  const { id } = req.query;
  await materialService.pdf(res, id);
};

module.exports = {
  send,
  posts,
  detail,
  pdf,
};
