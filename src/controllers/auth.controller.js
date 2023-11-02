const authService = require("../services/auth.service");
const { makeValidator } = require("../helpers/request.helper");

const loginValidator = makeValidator({
  username: ["string"],
  password: ["string"],
});
const login = async (req, res, next) => {
  let { username, password } = loginValidator(req.body);
  next(await authService.login(username, password));
};

const registerValidator = makeValidator({
  username: ["string"],
  password: ["string"],
});
const register = async (req, res, next) => {
  let { username, password } = registerValidator(req.body);
  next(await authService.register(username, password));
};

module.exports = {
  login,
  register,
};
