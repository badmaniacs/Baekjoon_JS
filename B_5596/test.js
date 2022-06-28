const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const G = input[0].split(' ').map(item=>+item).reduce((a, b)=> a+b,0);
const S = input[1].split(' ').map(item=>+item).reduce((a, b)=> a+b,0);
console.log(G>S ? G : S);