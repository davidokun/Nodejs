// This var is not accessible outside this file.
var greeting = 'Hello World! from greet5';

function greet() {
    console.log(greeting);
}

// Expose only the function greet. Everything else is not accessible.
// *Revealing Module Pattern*.
module.exports = {
    greetFn: greet
};