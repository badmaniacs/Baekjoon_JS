const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
const [N, M] = input[0].split(' ').map(item => {return +item});
const trie = new Set();
for (let i=1;i<=N;i++){
    trie.add(input[i]);
    console.log(input[i])
}
let result = 0;
for (let i=N+1;i<=N+M;i++){
    trie.has(input[i]) && result++;
    console.log(input[i]);
}

console.log(result)