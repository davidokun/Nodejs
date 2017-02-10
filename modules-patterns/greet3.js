// Function constructor for an object
function Greetr() {
    this.greeting = 'Hello world! from greet3';
    this.greet = function () {
        console.log(this.greeting);
    }
}

// Add a new object form the function constructor.
module.exports = new Greetr();