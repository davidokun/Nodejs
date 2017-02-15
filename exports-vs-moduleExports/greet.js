// Using = will point to anew object in memory.
exports = function () {
    console.log('Hello');
};

// Will print 2 different objects.
console.log(exports);
console.log(module.exports);