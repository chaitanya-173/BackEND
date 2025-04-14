// External Modules
const express = require('express');

// Local Modules
const requestHandler = require('./user');

const app = express();

app.get('/', (req, res, next) => {
  console.log("first middleware", req.url, req.method);
  // res.send('<p>Welcome to the first middleware</p>')
  next();
});

app.use('/submit-details', (req, res, next) => {
  console.log("second middleware", req.url, req.method);
  res.send('Welcome to the world of Express')  // res.send() implicitly calls res.end()
});

app.use('/submit-details', (req, res, next) => {
  console.log("third middleware", req.url, req.method);
  res.send('Welcome to the third middleware')  // res.send() implicitly calls res.end()
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running at port http://localhost:${PORT}`));