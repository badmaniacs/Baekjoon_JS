const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
const inputMap = new Map();
const N = +input[0];
for(let i=1;i<=N;i++){
    const data = inputMap.get(input[i]) || {total : 0};
    inputMap.set(input[i], {
        total : data.total + 1
    })
}

const array = [...inputMap.entries()].sort().sort((a, b) => b[1].total - a[1].total)
console.log(array[0][0])