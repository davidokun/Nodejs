var person = {
    name: 'John Doe',
    greet: function () {
        console.log(`Hello ${this.name}`)
    }
};

person.greet();

// Override this.name on object. Receive a second argument of coma separate values.(param1, param2)
person.greet.call({name: 'Jane Doe'});

// Override this.name on object. Receive a second argument of as an array. [param1, param2]
person.greet.apply({name: 'Lane Doe'});
