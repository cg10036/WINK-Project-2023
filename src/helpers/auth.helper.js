const jwt = require("jsonwebtoken");
const config = require("../configs");

const middleware = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  token = token.split(" ")[1] ?? "";
  jwt.verify(token, config.auth.Key, (err, decoded) => {
    if (err || !decoded.id || !decoded.username) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.user = decoded;
    console.log(req.user);
    next();
  });
};

const genToken = (user) => {
  return jwt.sign(user, config.auth.Key, {
    expiresIn: "1d",
  });
};

module.exports = {
  middleware,
  genToken,
};
