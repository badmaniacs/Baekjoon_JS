const fs = require('fs');
const { listenerCount } = require('process');
const input = fs.readFileSync('./input.txt').toString().trim();
const n = +input;
const array = [1000005];
array[1] = 0;
for(let i = 2; i <= n; i++) {
    array[i] = array[i-1]+1;
    if(i%2 === 0) {
        array[i] = Math.min(array[i],array[(i/2).toFixed(0)]+1);
    }
    if(i%3 === 0) {
        array[i] = Math.min(array[i],array[(i/3).toFixed(0)]+1);
    }
}
console.log(array[n]);
