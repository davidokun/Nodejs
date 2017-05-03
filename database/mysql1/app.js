const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen(3000);

app.use('/', function (req, res, next) {
    console.log('Request url: ' + req.url);

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root1",
        database: "test"
    });

    com.query("Some SQL query", function (err, rows) {
        if (err) throw err;
        console.log(rows);
    });

    next();

});

app.get('/api', function (req, res) {
    res.send('Hello');
});
