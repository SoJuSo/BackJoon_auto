// https://www.acmicpc.net/problem/2606

const fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);

// 아이디어 적기
// 1. 주어진 입력값으로 간선 그래프를 만든다
// 2. 생성된 그래프에서 1값을 기점으로 탐색시켜서 탐색값이 있을때만 answer값을 ++해준다.

const N = Number(input.shift());
const M = Number(input.shift());

// console.log(N, M);

const visited = [];
const graph = [];
let answer = 0;
for (let i = 0; i < N; i++) {
  graph.push([]);
}

for (let i = 0; i < N; i++) {
  visited.push(false);
}
visited[0] = true;

for (let i = 0; i < M; i++) {
  const [start, end] = input.shift().split(" ").map(Number);
  graph[start - 1].push(end);
  graph[end - 1].push(start);
}

// console.log(graph);
// console.log(visited);

const dfs = (start) => {
  for (const currentNode of graph[start - 1]) {
    // console.log(visited[currentNode - 1], currentNode, visited);
    if (visited[currentNode - 1] === false) {
      //   console.log(currentNode, "지금!", graph[start - 1]);
      visited[currentNode - 1] = true;
      answer++;
      dfs(currentNode);
    }
  }
};

dfs(1);

console.log(answer);
