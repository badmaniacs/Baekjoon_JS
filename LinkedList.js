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
}

