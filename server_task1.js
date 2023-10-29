const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact Page');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Invalid Request!');
    }
});

server.listen(5000, () => {
    console.log('The NodeJS server on port 5000 is now running....');
});
