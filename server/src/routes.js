const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const OwnersController = require("./controllers/OwnersController.js");
const RealtiesController = require("./controllers/RealtiesController.js");

const routes = express.Router();
const upload = multer(multerConfig);

routes.post("/owners", OwnersController.store);
routes.post(
  "/owners/:cpf/realties",
  upload.single("image"),
  RealtiesController.store
);
routes.get("/realties", RealtiesController.index);
routes.get("/realties-filtered", RealtiesController.show);
routes.delete("/realties/:id", RealtiesController.delete);
routes.get("/realties/:id/owners", RealtiesController.one);
routes.put("/realties/:id", RealtiesController.update);

module.exports = routes;
