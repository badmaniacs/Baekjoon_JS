class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    peek() {
        return this.queue[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    isEmpty() {
        return this.rear === this.front;
    }
}
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\r\n');
const [M,N] = input[0].split(' ').map(item=>+item);
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
const array = input.slice(1).map(item=> item.split(' ').map(item=>+item));
const narray = Array.from(
    Array(N),
    ()=>Array(M).fill(0)
)
const Q = new Queue();
for (let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if(array[i][j] === 1){
            Q.enqueue([i,j]);
        }
        if(array[i][j] === 0){
            narray[i][j] = -1;
        }
    }
}
while(!Q.isEmpty()){
    const [x,y] = Q.dequeue();
    for(let dir = 0; dir<4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if( nx<0 || nx >= N || ny <0 || ny >= M) continue;
        if( narray[nx][ny] >= 0) continue;
        narray[nx][ny] = narray[x][y] + 1;
        Q.enqueue([nx,ny]);
    }
}
let result = 0;
function output(){
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(narray[i][j] === -1){
                console.log(-1);
                return;
            }
            if(narray[i][j]>result){
                result = narray[i][j];
            }
        }  
    }
    console.log(result);
}
output();