const express = require('express');
const app = express();

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');


app.listen(3001);

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));


htmlController(app);
apiController(app);

