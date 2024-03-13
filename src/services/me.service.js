const UserRepository = require("../repositories/user.repository");
const MaterialRepository = require("../repositories/material.repository");
const StudyMateRepository = require("../repositories/studyMate.repository");
const { HttpResponse } = require("../helpers/response.helper");

const info = async (userId) => {
  let user = await UserRepository.findOneBy({ id: userId });
  delete user.password;
  let data = await MaterialRepository.findBy({ userId });
  let studymate = await StudyMateRepository.findBy({ userId });
  return new HttpResponse(200, { user, data, studymate });
};

module.exports = {
  info,
};
