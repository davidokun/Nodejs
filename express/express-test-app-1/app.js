const express = require('express');
const app = express();

// Get environment variables
const port = process.env.PORT || 3000;
app.listen(port);

// Middleware calls
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.get('/', function (req, res) {
    res.send("<html><head><link href=assets/styles.css type='text/css' rel='stylesheet' /></head><body><h1>Hello Express!! Yikess!!</h1></body></html>");
});


app.get('/api', function (req, res) {
    res.json({name: 'John', last: 'Doe'})
});


// Routing
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});
