// Mutate object 'exports' to not break the reference to the same object og module.exports.
exports.greet = function () {
    console.log('Hello');
};

// Same reference object.
console.log(exports);
console.log(module.exports);