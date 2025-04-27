const express = require("express");
const hostRouter = express.Router();

const hostController = require('../controllers/hostController');

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);

// Export both the router and the homes array
module.exports = hostRouter;
