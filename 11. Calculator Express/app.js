const path = require('path');

const express = require('express');

const homeRouter = require('./routes/homeRouter');
const calculatorRouter = require('./routes/calculatorRouter');
const productRouter = require('./routes/productRouter');
const rootDir = require('./utils/pathUtils');

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(calculatorRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));