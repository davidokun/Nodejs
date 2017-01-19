const buffer = new ArrayBuffer(8);

const view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 25;

console.log(view);