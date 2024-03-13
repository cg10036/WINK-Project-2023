const meService = require("../services/me.service");

const info = async (req, res, next) => {
  next(await meService.info(req.user.id));
};

module.exports = {
  info,
};
