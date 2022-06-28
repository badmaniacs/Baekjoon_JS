const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(item=>+item);
const N = input.shift();
if(input.reduce((a,b)=>a+b,0)>N/2){
    console.log("Junhee is cute!")
}
else{
    console.log("Junhee is not cute!");
}