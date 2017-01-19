const buf = new Buffer('Hello', 'utf8');

console.log(buf); // utf encoding
console.log(buf.toString());
console.log(buf.toJSON()); // Unicode representation
console.log(buf[2]);

buf.write('wo'); // override the buffer

console.log(buf.toString());