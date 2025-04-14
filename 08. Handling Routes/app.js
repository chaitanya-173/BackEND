const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url, req.method);
  next();
})

app.use((req, res, next) => {
  console.log("Second Dummy middlware", req.url, req.method);
  next();
})

app.use((req, res, next) => {
  console.log("Onto the third middleware");
  // res.send('Express made it easy');
  next();
})

app.get('/', (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send("Welcome to GET middleware");
})

app.get('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please enter your details here: </h1>
    <form action="/contact-us" method="POST">
      <input type="text" placeholder="Enter your name" name="name">
      <input type="email" placeholder="Enter your email" name="email">
      <input type="submit">
    </form>
  `);
})

app.post('/contact-us', (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send("<h1>We will contact you shortly</h1>");
})

const PORT = 3003;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));