const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const A = +input[0];
const result = input[1].split(' ').map(item=>+item).filter(item=>item===A);
console.log(result.length)