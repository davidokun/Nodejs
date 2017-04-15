// If greets.js does not exists, it looks for a folder called greet and then
// for a file called index.js.
var greet = require('./greets/index');

// Call each method exported from the modules english.js and spanish.js
greet.english();
greet.spanish();