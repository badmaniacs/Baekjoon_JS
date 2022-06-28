const fs = require('fs');
const input = +fs.readFileSync('./input.txt').toString();
const array = []; 
function result(a, b, n) {
    if(n === 1) {
        array.push([a, b]);
        return;
    }
    result(a, 6-a-b, n-1);
    array.push([a, b]);
    result(6-a-b, b, n-1);
}
console.log(2 ** input - 1);
result(1, 3, input);
console.log(array.map(item=>item.join(" ")).join("\n"));