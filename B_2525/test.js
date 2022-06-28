const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let [A, B] = input[0].split(' ').map(item=> +item);
const C = +input[1];
B = B + C;
if(B>=60){
    A = A+(Math.floor(B/60));
    B = B%60;
}
if(A>=24){
    A = A%24;
}
console.log(A, B)