const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
function solution(input) {
    let N = +input;
    let count = 0;
    console.log(N);
    while(N!==1){
        if(N%3===0){
            count++;
            N = N/3;
        }
        else if((N-1)%3===0){
            count += 2;
            N = (N-1)/3;
        }
        else if(N%2===0){
            count++;
            N = N/2;
        }
        else if((N-1)%2===0){
            count += 2;
            N = (N-1)/2
        }
    }
    return count;
}
console.log(solution(input));