const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const array = input[1].split(' ').map(item=> {return +item}).sort((a,b)=> a -b);
let start = 0;
let end = array.length-1;
let count = 0;
const x = +input[2];
while(start<end) {
    if(array[start] + array[end] === x){
        start++;
        end--;
        count++;
    }
    else if(array[start] + array[end] > x){
        end--;
    }
    else{
        start++;
    }
}
console.log(count);