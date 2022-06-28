const fs = require('fs');
const [N, R, C] = fs.readFileSync('./input.txt').toString().split(' ').map(item=> +item);
function Z(N, R, C) {
    if(N === 0) return 0;
    half = 2 ** (N-1);
    if(R < half && C < half) {
        return Z(N-1, R, C);    
    }
    if(R < half && C >= half) {
        return half * half + Z(N-1, R, C-half);
    }
    if(R >= half && C < half) {
        return 2 * half * half + Z(N-1, R-half, C);
    }
    return 3 * half * half + Z(N-1, R-half, C-half);
}
console.log(Z(N, R, C));