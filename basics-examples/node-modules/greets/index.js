// Require single modules for Enlish and Spanish
var english = require('./english');
var spanish = require('./spanish');

// Then exports both methods
module.exports = {
    english: english,
    spanish: spanish
};