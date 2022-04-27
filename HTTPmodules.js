const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("hello node.js");
        res.end();
    }
    if(req.url === '/api/products'){
        res.write('product list');
        res.end();
    }
    else{
        res.write('nothing');
        res.end();
    }

});

server.on('connection', function() {
    console.log('new connection');
});

server.listen(5557);

console.log('listening port on 5557');