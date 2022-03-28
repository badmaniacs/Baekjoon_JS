const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
const string = input[1].split("");
let sum = 0;
for (let i=0;i<string.length;i++) {
    sum += (string[i].charCodeAt()-96)*(31**(i)%1234567891)
}
console.log(sum);