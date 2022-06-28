const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ').map(item=>+item);
const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]); 
function pow (A, B, C) {
    if(B == 1) {
        return A % C;
    }
    val = pow(A, B/BigInt(2), C);
    val = val * val % C;
    if(B%BigInt(2) === 0) {
        return val;
    }
    return val * A % C;
}
console.log(pow(A, B, C));