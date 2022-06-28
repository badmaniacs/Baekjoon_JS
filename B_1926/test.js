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
const [N,M] = input[0].split(' ').map(item=>+item);
const array = input.slice(1).map(item=> item.split(' '));
const visited = Array.from(
    Array(N),
    () => Array(M).fill(false)
)
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
let mx = 0;
let num = 0;
for (let i=0; i<N; i++) {
    for(let j=0; j<M; j++){
        if(array[i][j] === '0' || visited[i][j]) continue;
        num++;
        const Q = new Queue();
        visited[i][j] = true;
        Q.enqueue([i,j]);
        let area = 0;
        while(!Q.isEmpty()){
            area++;
            const [x, y] = Q.dequeue();
            for(let dir = 0; dir < 4; dir++){
                const nx = x + dx[dir];
                const ny = y + dy[dir];
                if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if(visited[nx][ny] || array[nx][ny] !== "1") continue;
                visited[nx][ny] = true;
                Q.enqueue([nx,ny]);
            }
        }
        if(area>mx){
            mx = area;
        }
    }
}
console.log(num);
console.log(mx);
