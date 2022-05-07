var http = require('http');
const fs = require('fs'); 
http.createServer(function (req, res) { 
  /*
  res.setHeader('content-type', 'text/html');
  res.statusCode=200;
  //res.write(JSON.stringify({name:hale,id:6}));
  res.write('<html>');
  res.write('<head>');
  res.write('<body><h1>hello</h1></body>');
  res.write('</head>');
  res.write('</html>');
  res.end();
  */

  fs.readFile('index.html', function(error,file){
    if(error) {
      res.setHeader('Content-type','text-plain');
      res.statusCode=404;
      res.statusMessage='not found';
      res.write('dosya bbulunamadı');
      res.end();
    }else {
      res.setHeader('Content-type','text/html');
      res.statusCode=200;
      res.statusMessage='ok';
      res.end(file);
    }
  })

}).listen(8080);