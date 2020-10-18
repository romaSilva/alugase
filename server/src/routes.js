const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const OwnersController = require("./controllers/OwnersController.js");
const RealtiesController = require("./controllers/RealtiesController.js");

//index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

// routes.post("/realties", upload.single("image"), ownersController.create);

routes.post("/owners", OwnersController.store);
routes.get("/owners", OwnersController.index);

routes.post("/owners/:cpf/realties", RealtiesController.store);

module.exports = routes;
