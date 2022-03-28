// 인접 행렬
const graph = Array.from(
    Array(5),
    () => Array(5).fill(false)
)
console.log(graph);
// 인접 리스트
const graphT = Array.from(
    Array(5),
    () => []
)
graphT[0].push(1);

