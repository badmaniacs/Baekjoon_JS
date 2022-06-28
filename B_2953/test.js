const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(item=>item.split(' ').map(item=>+item).reduce((a,b)=>a+b,0)).map((item,index)=>{return [index+1,item]}).sort((a,b)=>b[1]-a[1]);
console.log(...input[0])