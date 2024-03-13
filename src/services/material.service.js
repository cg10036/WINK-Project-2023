const { HttpResponse } = require("../helpers/response.helper");
const Material = require("../models/material.model");
const MaterialRepository = require("../repositories/material.repository");

const send = async (userId, title, content, file, professor) => {
  let material = new Material();
  material.userId = userId;
  material.title = title;
  material.file = file;
  material.content = content;
  material.professor = professor;

  MaterialRepository.save(material);

  return new HttpResponse(201, "UPLOAD_SUCCESS");
};

module.exports = {
  send,
};
