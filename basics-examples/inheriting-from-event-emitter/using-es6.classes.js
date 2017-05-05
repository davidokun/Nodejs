'use strict';

var EventEmitter = require('events');

class Greet extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello World!';
    }

    greet(data){
        console.log(`${this.greeting} : ${data}`);
        this.emit('greet', data);
    }
}

var greeter1 = new Greet();

greeter1.on('greet', function (data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('John');