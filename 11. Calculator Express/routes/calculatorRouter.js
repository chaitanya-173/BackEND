const path = require('path');

const express = require('express');
const calculatorRouter = express.Router();

const rootDir = require('../utils/pathUtils');

calculatorRouter.get('/calculator', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'calculator.html'));
});

module.exports = calculatorRouter;