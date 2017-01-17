// Function statement
function greet() {
    console.log("Hello World")
}

greet();

// Functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// Function expressions
var greetMe = function () {
    console.log("Hi World!")
};

greetMe();

// it's first-class
logGreeting(greetMe);

// Use a function expression on the fly
logGreeting(function () {
    console.log("Hello function on the fly");
});