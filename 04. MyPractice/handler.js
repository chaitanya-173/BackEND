const { homepageHandler } = require('./homepageHandler');
const { calculatorHandler } = require('./calculatorHandler');
const { productHandler } = require('./productHandler');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    return homepageHandler(req, res);
  }
  else if (req.url.toLowerCase() === '/calculator') {
    return calculatorHandler(req, res);
  }
  else if (req.url.toLowerCase() === '/product') {
    return productHandler(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html lang="en">
      <head>
        <title>My Calculator</title>
      </head>
      <body>
        <h1>404 Page doesn't exist</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `)
  return res.end();
}

exports.requestHandler = requestHandler;