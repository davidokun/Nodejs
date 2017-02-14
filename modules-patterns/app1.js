var greet = require('./greet1');
greet();

// Extraction the specific function from module.exports through require function.
var greet2 = require('./greet2').greet;
greet2();

// Gets an object from the require function.
var greet3 = require('./greet3');
greet3.greet();

// Change function on object retrieved
greet3.greeting = 'Changed hello world! form Greet3';

// Call require again on greet3
var greet3b = require('./greet3');
// Call changed message. Require caches objects.
greet3b.greet();

var Greet4 = require('./greet4');
// Create the new object from the function constructor
// returned from require.
var grtr = new Greet4();
grtr.greet();

// Require return only function exposed. No access to anything else.
var greet5 = require('./greet5').greetFn;
greet5();