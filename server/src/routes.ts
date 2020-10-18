import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import OwnersController from "./controllers/OwnersController";
import RealtiesController from "./controllers/RealtiesController";

//index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const ownersController = new OwnersController();
const realtiesController = new RealtiesController();

// routes.post("/realties", upload.single("image"), ownersController.create);

routes.post("/owners", ownersController.create);

export default routes;
