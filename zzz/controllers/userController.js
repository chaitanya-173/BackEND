const Home = require('../models/home');

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll((registeredHomes) => {
    res.render("store/home", {
      pageTitle: "Airbnb Homes",
      registeredHomes: registeredHomes,
      currentPage: "home"
    });
  });
};
