const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
function fibo(n) {
    const f = [];
    f[0] = f[1] = 1;
    for(let i = 2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
console.log(fibo(+input-1))