const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(item=>+item);
const [A,B,C] = input;
if(A===B && B===C){
    console.log(10000+A*1000);
}
else if(A!==B && B!==C && C!==A){
    console.log(Math.max(A,B,C)*100);
}
else {
    console.log(input.sort((a,b)=>a-b)[1]*100+1000)
}