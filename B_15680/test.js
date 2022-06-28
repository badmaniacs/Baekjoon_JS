const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');
if(input[0]===input[1]){
    console.log(1)
}
else{
    console.log(0)
}