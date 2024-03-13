const { HttpResponse } = require("../helpers/response.helper");
const Material = require("../models/material.model");
const MaterialRepository = require("../repositories/material.repository");

const send = async (
  userId,
  title,
  content,
  file,
  professor,
  type,
  keyword,
  note
) => {
  let material = new Material();
  material.userId = userId;
  material.title = title;
  material.file = file;
  material.content = content;
  material.professor = professor;
  material.type = type;
  material.keyword = keyword;
  material.note = note;

  await MaterialRepository.save(material);

  return new HttpResponse(201, "UPLOAD_SUCCESS");
};

const posts = async () => {
  return new HttpResponse(
    200,
    await MaterialRepository.find({
      order: {
        createdAt: "DESC",
      },
      select: [
        "id",
        "createdAt",
        "userId",
        "professor",
        "title",
        "content",
        "type",
        "keyword",
        "note",
      ],
    })
  );
};

module.exports = {
  send,
  posts,
};
