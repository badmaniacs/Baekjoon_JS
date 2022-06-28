const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(item=> +item);
const b = input.slice(0,3).sort((a,b)=> a-b)[0];
const w = input.slice(3,5).sort((a,b)=> a-b)[0];
console.log(b+w-50);