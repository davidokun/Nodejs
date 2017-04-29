const express = require('express');
const app = express();

app.listen(3001);

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id});
});

