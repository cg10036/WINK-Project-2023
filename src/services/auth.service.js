const { HttpResponse } = require("../helpers/response.helper");
const bcrypt = require("bcrypt");

const User = require("../models/user.model");
const UserRepository = require("../repositories/user.repository");

const SALT = 12;

const login = async (username, password) => {
  let user = await UserRepository.findOneBy({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new HttpResponse(401, "WRONG_USER_OR_PASSWORD");
  }
  return new HttpResponse(200, "LOGIN_SUCCESS");
};

const register = async (username, password) => {
  let user = new User();
  user.username = username;
  user.password = await bcrypt.hash(password, SALT);

  try {
    await UserRepository.save(user);
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return new HttpResponse(400, "USERNAME_ALREADY_EXISTS");
    }
  }
  return new HttpResponse(201, "REGISTER_SUCCESS");
};

module.exports = {
  login,
  register,
};
