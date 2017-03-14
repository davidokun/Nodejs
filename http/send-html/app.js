const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    const message = 'Hello Node message template';

    html = html.replace('{message}', message);

    res.end(html);


}).listen(8080, '127.0.0.1');