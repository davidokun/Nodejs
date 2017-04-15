var greet = require('./greet');
var greet2 = require('./greet2');

// error because greet() is not in module.exports.
//greet();
greet2.greet();