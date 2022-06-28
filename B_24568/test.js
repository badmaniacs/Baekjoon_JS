const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(item=>+item);
const T = (input[0]*8)+(input[1]*3);
console.log(T>28 ? T - 28 : 0);