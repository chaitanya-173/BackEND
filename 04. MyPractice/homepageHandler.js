const homepageHandler = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>Welcome to My calculator</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
    </html>
  `)
  res.end();
}

exports.homepageHandler = homepageHandler;