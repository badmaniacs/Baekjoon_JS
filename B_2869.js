const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');
const A = +input[0];
const B = +input[1];
const V = +input[2];
function result (A, B, V) {
    let day = (V-B)/(A-B);
    if(((V-B)%(A-B)) !== 0) {
        day++;
    }
    return Math.floor(day); 
}
console.log(result(A,B,V));
