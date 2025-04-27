const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add Home", currentPage: "add-home" });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating } = req.body;
  const home = new Home(houseName, price, location, rating);
  home.save();
  res.redirect("/");
};
