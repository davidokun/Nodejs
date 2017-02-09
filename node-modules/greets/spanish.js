// Require a .json file which will be imported as javascript object.
var greetings = require('./greetings.json');

var greet = function () {
    console.log(greetings.es); // Use object properties
};

module.exports = greet;