const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    if (req.url === '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.createReadStream(__dirname + '/index.html')
            .pipe(res);
    } else if (req.url === '/person') {

        res.writeHead(200, {'Content-Type': 'application/json'});

        const person = {
            firstName: 'Jane',
            lastName: 'Doe',
            address: 'Main street'
        };

        res.end(JSON.stringify(person));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080);