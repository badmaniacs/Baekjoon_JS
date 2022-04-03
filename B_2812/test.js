const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
const [N, K] = input[0].split(' ');
const number = input[1];
const stack = [];
let count = 0;
for (const item of number) {
    while(count < K && stack[stack.length -1] < item) {
        stack.pop();
        count++;
    }
    stack.push(item);
}
while(count < K){
    stack.pop();
    count++;
}
console.log(stack.join(""));