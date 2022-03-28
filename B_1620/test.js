const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
const [N, M]= input[0].split(" ").map(item=>{return +item});
const obname = {};
const number = {};
for(let i = 1;i<=N;i++){
    obname[i] = input[i];
    number[input[i]] = i; 
}
for(let i=N+1;i<=N+M;i++){
    if(isNaN(input[i])){
        console.log(number[input[i]]);
    }
    else{
        console.log(obname[input[i]]);
    }
}