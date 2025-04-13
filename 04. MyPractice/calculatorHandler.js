const calculatorHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Practice set - Calculator</title></head>
      <body>
        <h1>Here is the calculator</h1>
        <form action="/product" method="POST">
          <input type="text" placeholder="First Number" name="first" />
          <input type="text" placeholder="Second Number" name="second" />
          <input type="submit" value="Product" />
        </form>
      </body>
    </html>
  `);
  return res.end();
}

exports.calculatorHandler = calculatorHandler;