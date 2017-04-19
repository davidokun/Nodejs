const express = require('express');
const app = express();

// Get environment variables
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("<html><head></head><body><h1>Hello Express!! Yikess!!</h1></body></html>");
});

app.get('/api', function (req, res) {
    res.json({name: 'John', last: 'Doe'})
});

app.listen(port);
