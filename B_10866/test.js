const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');
const N = +input[0];
const MX = 1000005;
const data = new Array(2*MX+1);
let head = MX;
let tail = MX;

function push_front(x) {
    data[--head] = x;
}
function push_back(x) {
    data[tail++] = x;
}
function pop_front(){
    head++;
}
function pop_back(){
    tail--;
}
function front(){
    return data[head];
}
function back(){
    return data[tail-1];
}
for (let i=1;i<=N;i++) {
    const [order, value] = input[i].split(' ');
    if(order === "push_back") {
        push_back(+value);
    }
    else if(order === "push_front") {
        push_front(+value);
    }
    else if(order === "pop_front") {
        if(tail===head) {
            console.log(-1);
        }
        else {
            console.log(front());
            pop_front();
        }
    }
    else if(order === "pop_back") {
        if(tail===head) {
            console.log(-1);
        }
        else {
            console.log(back());
            pop_back();
        }
    }
    else if(order === "size") {
        console.log(tail-head);
    }
    else if(order === "empty") {
        console.log(tail===head ? '1' : '0');
    }
    else if(order === "front") {
        if(tail===head) {
            console.log(-1);
        }
        else {
            console.log(front());
        }
    }
    else if (order === "back") {
        if(tail===head) {
            console.log(-1);
        }
        else {
            console.log(back());
        }
    }
}