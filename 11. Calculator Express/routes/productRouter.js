const path = require('path');

const express = require('express');
const productRouter = express.Router();

const rootDir = require('../utils/pathUtils');

productRouter.post('/product', (req, res, next) => {
  res.send(`
      <header>
        <h1>The product of ${req.body.first} and ${req.body.second} is ${Number(req.body.first) * Number(req.body.second)}</h1>
      </header>
  `);
});

module.exports = productRouter;