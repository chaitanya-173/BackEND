const express = require("express");

const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

// View engine setup
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(userRouter);
app.use("/host", hostRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
