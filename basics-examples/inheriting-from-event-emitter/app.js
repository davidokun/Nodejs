var EventEmitter = require('events');
var util = require('util');

function Greet() {
    EventEmitter.call(this);
    this.greeting = 'Hello World!';
}

util.inherits(Greet, EventEmitter);

Greet.prototype.greet = function (data) {
    console.log(this.greeting + ':' + data);
    this.emit('greet', data);
};

var greeter1 = new Greet();

greeter1.on('greet', function (data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('John');