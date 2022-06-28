const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
input.shift();
for (item of input){
    const nitem = item.split(' ').map(item=>{return item.split('').reverse().join('')}).join(' ');
    console.log(nitem)
}