module.exports = function (app) {

    app.get('/api/v1/person/:id', function (req, res) {
        // get that data from database
        res.json({ firstName: 'John', lastName: 'Doe'});
    });

    app.post('api/v1/person', jsonParser, function (req, res) {
        // save to the database
    });

    app.delete('/api/v1/person/:id', function (req, res) {
        // delete from the database
    })

};