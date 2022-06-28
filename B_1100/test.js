const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
let a = 100;
let b = 100;
for(item of input){
    const [c, d] = item.split(' ').map(item=>+item);
    if(c>d){
        b = b - c;
    }
    else if(c<d){
        a = a - d;
    }
}
console.log(a);
console.log(b);