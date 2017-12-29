'use strict';

var Greet = require('./greet-module');

var greeter1 = new Greet();

greeter1.on('greet', function (data) {
    console.log('Someone greeted: ' + data);
});

greeter1.greet('John');