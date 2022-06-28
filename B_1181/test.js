const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N, S] = input[0].split(' ').map(item => +item);
const array = input[1].split(' ').map(item => +item);
let count = 0;
function counting(cur, total) {
    if(cur === N) {
        if(total === S) {
            count++;
        }
        return;
    }
    counting(cur+1, total);
    counting(cur+1, total+array[cur])
}
counting(0, 0);
if(S === 0) {
    count--;
}
console.log(count);