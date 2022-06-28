const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('/').map(item=>+item);
if(input[0]+input[2]<input[1] || input[1]===0){
    console.log("hasu");
}
else{
    console.log("gosu");
}