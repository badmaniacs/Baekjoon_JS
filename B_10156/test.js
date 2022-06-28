const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(item=>+item);
if(input[0]*input[1]>input[2]){
    console.log((input[0]*input[1])-input[2]);
}
else{
    console.log(0)
}