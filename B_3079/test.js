const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\r\n')
const [N, M] = input[0].split(' ').map(item=> {return +item});
const table = input.slice(1,N+1).map(item=>{return +item})
let left = 1;
let right = Math.max(...table) * M;
while(left <= right) {
    const center = Math.floor((left + right)/2);
    const sum = table.reduce((a,b) => a + Math.floor(center / b), 0);
    if(sum < M) {
        left = center + 1;
    }
    else{
        right = center - 1;
    }
}
console.log(left);