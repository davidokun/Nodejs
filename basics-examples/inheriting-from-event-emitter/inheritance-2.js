var util = require('util');

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + ' ' + this.lastName);
};

function Policeman() {
    // Like super() constructor to inherits all Person attributes.
    Person.call(this);
    this.badgeNumber = 123;
}

util.inherits(Policeman, Person);

var officer = new Policeman();

officer.greet();