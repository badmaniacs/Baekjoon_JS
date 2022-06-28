const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const data = {
    'black' : '0',
    'brown' : '1',
    'red' : '2',
    'orange' : '3',
    'yellow' : '4',
    'green' : '5',
    'blue' : '6',
    'violet' : '7',
    'grey' : '8',
    'white' : '9'    
}
console.log(+(data[input[0]]+data[input[1]])*Math.pow(10,+data[input[2]]));
