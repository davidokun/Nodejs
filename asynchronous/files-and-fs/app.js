// Deals with file system. V8 side.
const fs = require('fs');

// Synchronous call
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// Asynchronous call. Callback takes always an error as first parameter.
const greet2 = fs.readFile(__dirname + '/greet.txt', function (err, data) {
    console.log(data);
});

// Prints undefine
console.log(greet2);

console.log('Done');