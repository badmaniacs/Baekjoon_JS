const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');
class Node{
    constructor(value) {
        this.value = value;
        this.pre = null;
        this.next = null; 
    }
}
class List{
    constructor() {
        this.head = null;
        this.tail = null;        
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = this.tail = newNode;
        }
        else{
            newNode.pre = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    print() {
        let cur = this.head;
        while(cur){
            console.log(cur.value);
            cur = cur.next;
        }
    }
    delete(point){
        if(point.pre === null){
            point.next.pre = null;
            this.head = point.next;
        }
        else if(point.next === null){
            point.pre.next = null;
        }
        else {
            point.next.pre = point.pre;
            point.pre.next = point.next;
        }
    }
    put(point, value){
        const newNode = new Node(value);
        if (point === null) {
            newNode.next = this.head;
            this.head.pre = newNode;
            this.head = newNode
        }
        else if(point.next === null) {
            this.insert(value);
        }
        else{
            newNode.next = point.next
            point.next.pre = newNode;
            point.next = newNode;
            newNode.pre = point;    
        }    
    }
}
const list = new List();
for (item of input[0]){
    list.insert(item);
}
let cursor = list.tail
for (let i = 2; i<input.length; i++){
    const [order, value] = input[i].split(' ');
    if(order === 'L'){
        cursor = cursor.pre;
    }
    else if(order ==='D'){
        cursor = cursor.next;
    }
    else if(order ==='B'){
        list.delete(cursor);
    }
    else if(order ==='P'){
        list.put(cursor, value);
        cursor = cursor.next
    }
}
list.print()