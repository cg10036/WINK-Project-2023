const typeorm = require("typeorm");
const express = require("express");
const cors = require("cors");
const AppDataSource = require("./data-source");
require("./helpers/exception.helper")(); // handle async error

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(require("./routes/routes"));

  app.use(require("./helpers/response.helper").errorHandler);
  app.listen(3000, () => console.log("Server started on port 3000"));
});
