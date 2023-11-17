const AppDataSource = require("../data-source");

module.exports = AppDataSource.getRepository(
  require("../models/material.model")
);
