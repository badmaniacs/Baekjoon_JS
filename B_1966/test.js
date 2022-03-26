const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item=>{return item.trim()});
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
    }  
    enqueue(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek() {
        return this.head.value;
    }
}

function solution (priorities, location) {
    const queue = new Queue;
    for (let i=0; i<priorities.length; i++){
        queue.enqueue([priorities[i], i]);
    }
    priorities.sort((a, b)=> b - a);
    let count = 0;
    while(true){
        const tempValue = queue.peek();
        if (tempValue[0] < priorities[count]) {
            queue.enqueue(queue.dequeue());
        }
        else{
            const out = queue.dequeue();
            count++;
            if (location === out[1]){
                return count;
            }
        }
    }
}

const testCase = +input[0];
for (let i=1;i<=testCase*2;i+=2){
    const priorities = input[i+1].split(" ").map(item=>{return +item})
    const location = +input[i].split(" ")[1]
    console.log(solution(priorities, location));
}