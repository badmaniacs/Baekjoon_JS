const array = Array(30).fill(0).map((item,index)=>{return index+1});
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(item=>+item)
.forEach(item=>
    array[item-1]=false);

for (item of array){
    if(item){
        console.log(item);
    }
}