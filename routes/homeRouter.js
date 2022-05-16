const express = require("express");

const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/about", homeController.about);
homeRouter.get("/", homeController.index);
homeRouter.get("/license", homeController.license);
homeRouter.get("/market", homeController.market);

module.exports = homeRouter;