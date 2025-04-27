const express = require("express");
const userRouter = express.Router();

const homesController = require("../controllers/userController");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
