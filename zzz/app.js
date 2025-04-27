const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const errorController = require("./controllers/errorController");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View engine setup
app.set("view engine", "ejs");
app.set("views", "views");

// Routes
app.use(userRouter);
app.use("/host", hostRouter);

// 404 handler
app.use(errorController.pageNotFound);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
