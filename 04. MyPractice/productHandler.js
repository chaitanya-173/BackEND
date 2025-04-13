const productHandler = (req, res) => {

  console.log("In Product request handler");
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const product = Number(bodyObj.first) * Number(bodyObj.second);
    console.log(product);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Product</title></head>
        <body>
          <h1>Your Product is ${product}</h1>
        </body>
      </html>
    `);
    return res.end();
  })
  
}

exports.productHandler = productHandler;