const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencoderParser = bodyParser.urlencoded({extended: false});

const jsonParser = bodyParser.json();

app.listen(3001);

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function (req, res) {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});

app.post('/person', urlencoderParser ,function (req, res) {
    res.send('Thank you');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser,function (req, res) {
    res.send('Thank you');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

