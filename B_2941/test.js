const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
const ca = ['c=','c-','dz=','d-','lj','nj','s=','z='];
function checker (input, ca, count){
    if(count===ca.length){
        return console.log(input)
    }
    checker(input.replaceAll(ca[count], '#'),ca,count+1)
}
checker(input,ca,0);