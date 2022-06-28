const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(item=>+item).sort((a,b)=>a-b);
console.log((input[3]+input[0])-(input[1]+input[2]));
