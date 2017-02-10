var greet = require('./greet1');
greet();

// Extraction the specific function from module.exports through require function.
var greet2 = require('./greet2').greet;
greet2();