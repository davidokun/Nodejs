const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'application/json'});

    const person = {
        firstName: 'John',
        lastName: 'Dow',
        address: {
            street: 'Main',
            block: 5
        }
    };

    res.end(JSON.stringify(person));


}).listen(8080, '127.0.0.1');