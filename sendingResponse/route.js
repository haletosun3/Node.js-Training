const fs = require('fs'); 
const qs = require('querystring');

const routeHandler = (req,res) => {
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
    
        //body parsing(bodyParser)
         const body = [];
    
        req.on('data', (chunk) => {
          body.push(chunk);
          console.log(chunk);
        });
    
        req.on('end',()=> {
          const bodyParsed = Buffer.concat(body).toString();
          const message = bodyParsed.split('=')[1];//böl böldükten sonraki 2. elemanı al
          console.log(qs.parse(bodyParsed)); //bilgiyi objeye cevirir. formdan gelen bilgi
          fs.appendFileSync('message.txt',message);
        })
    
        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      }
}
module.exports = routeHandler;



