// Function constructor for an object
function Greetr() {
    this.greeting = 'Hello world! from greet4';
    this.greet = function () {
        console.log(this.greeting);
    }
}

// Add a new object form the function constructor without new keyword
module.exports = Greetr;