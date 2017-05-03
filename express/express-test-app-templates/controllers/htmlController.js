const bodyParser = require('body-parser');

const urlencoderParser = bodyParser.urlencoded({extended: false});
const jsonParser = bodyParser.json();

module.exports = function (app) {

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
};