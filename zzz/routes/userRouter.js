const express = require("express");
const userRouter = express.Router();

// Import the registeredHomes array
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  res.render("home", {
    pageTitle: "Airbnb Homes",
    registeredHomes: registeredHomes,
  });
});

module.exports = userRouter;
