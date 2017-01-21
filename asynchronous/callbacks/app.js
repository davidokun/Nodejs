function greet(callback) {
    console.log('hello');

    const data = {
        name: 'John'
    };

    callback(data);
}

greet(function (data) {
    console.log('The callback was invoked');
    console.log(data);
});

greet(function (data) {
    console.log('A different callback was invoked');
    console.log(data.name);
});



