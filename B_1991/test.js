const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');
const N = +input[0];
const tree = new Tree();
for (let i=1;i<=N;i++){
    const node = input[i].split(' ');


}

class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;  
    }
}

class Tree{
    constructor(node) {
        this.root = node;
        this.left = null;
        this.right = null;
    }

    insert(value){
        const newNode = new Node(value);
        
    }

    preorder(currentNode) {
        console.log(currentNode.value);
        if (currentNode.left) this.preorder(currentNode.left);
        if (currentNode.right) this.preorder(currentNode.right);
    }

    inorder(currentNode){
        if (currentNode.left) this.inorder(currentNode.left);
        console.log(currentNode.value);
        if (currentNode.right) this.inorder(currentNode.right);
    }
    postorder(currentNode){
        if (currentNode.left) this.postorder(currentNode.right);
        if (currentNode.right) this.postorder(currentNode.right);
        console.log(currentNode.value);
    }
}