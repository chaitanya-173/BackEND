const express = require("express");
const hostRouter = express.Router();

const registeredHomes = [];

hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home", { pageTitle: "Add Home" });
});

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);
  console.log(req.body);
  res.redirect("/");
});

// Export both the router and the homes array
module.exports = {
  hostRouter,
  registeredHomes,
};
