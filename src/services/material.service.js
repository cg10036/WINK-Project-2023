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
  note,
  semester
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
  material.semester = semester;

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
        "semester",
      ],
    })
  );
};

const detail = async (id) => {
  return new HttpResponse(
    200,
    await MaterialRepository.findOne({
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
        "semester",
      ],
      where: {
        id,
      },
    })
  );
};

const pdf = async (res, id) => {
  let { file } = await MaterialRepository.findOne({
    where: {
      id,
    },
    select: ["file"],
  });
  if (!file || !id) {
    return res.status(404).send("File not found");
  }
  res.setHeader("Content-Type", "application/pdf");
  return res.send(Buffer.from(file, "base64"));
};

module.exports = {
  send,
  posts,
  detail,
  pdf,
};
