const { HttpResponse } = require("../helpers/response.helper");
const Material = require("../models/material.model");
const MaterialRepository = require("../repositories/material.repository");

const send = async (sql, prepare) => {
  const [result] = await materialRepository.execute(sql, prepare);
};

module.exports = {
  send,
};
