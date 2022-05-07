var http = require('http');
const fs = require('fs'); 

http.createServer(function (req, res) { 
  const url = req.url;
  const method = req.method;
res.setHeader('Content-type','text/html');

  if(url === '/'){
      res.write(`
      <html lang="en">
      <head>
        <title>routing sample</title>
      </head>
      <body>
        <form method="POST" action="/log">
            <input type="text" name="message">
            <button type="submit">save</button>
        </form>
      </body>
      </html>
      
      `);
     return res.end();
  }

  if(url === '/log' && method === 'POST' ) {
    fs.writeFileSync('message.txt','sample');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }

}).listen(3000);