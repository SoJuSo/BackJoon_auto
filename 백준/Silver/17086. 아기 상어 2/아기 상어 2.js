// // https://www.acmicpc.net/problem/1966

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
// const splitPath = process.platform === "linux" ? "\n" : "\r\n";
// let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// const TC = +input.shift();
// const answer = [];
// for (let i = 0; i < TC; i++) {
//   const [N, M] = input.shift().split(" ").map(Number);
//   if (N === 1) {
//     answer.push(1);
//   } else {
//     const list = input.shift().split(" ").map(Number);
//   }
// }

// https://www.acmicpc.net/problem/17086

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 그래프 문제네
// 결국 상어가 없는 공간의 안전거리가 각각 얼마인지 고르는 것..?

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const graph = input.map((val) => val.split(" ").map(Number));

const dx = [0, 0, 1, 1, 1, -1, -1, -1];
const dy = [1, -1, 1, 0, -1, -1, 0, 1];

// console.log(graph, visited);

const list = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j]) {
      list.push([i, j]);
    }
  }
}

const bfs = (list) => {
  const visited = Array.from(Array(N), () => Array(M).fill(0));
  while (list.length) {
    const [x, y] = list.shift();
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || graph[nx][ny] || visited[nx][ny]) continue;

      visited[nx][ny] = visited[x][y] + 1;
      list.push([nx, ny]);
    }
  }
  return visited;
};

const answer = bfs(list);
console.log(Math.max(...answer.flat()));
