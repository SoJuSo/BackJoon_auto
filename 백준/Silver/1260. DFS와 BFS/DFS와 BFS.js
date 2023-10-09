// https://www.acmicpc.net/problem/1260

let fs = require("fs");
// let input = fs.readFileSync("example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
//아이디어
// ---
// 레퍼런스 참조
// 인접리스트를 만들고
// DFS, BFS를 구현한다.

let [N, M, V] = input.shift().split(" ").map(Number);
// console.log(N, M, V, input);
const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

for (let i = 0; i < M; i++) {
  const arr = input[i].split(" ").map(Number);
  //   console.log(arr);
  graph[arr[0]][arr[1]] = true;
  graph[arr[1]][arr[0]] = true;
}

// console.log(graph);
const d_visited = new Array(N + 1).fill(false);
const d_answer = [];

const DFS = (graph, node) => {
  d_visited[node] = true;
  d_answer.push(node);
  for (let i = 1; i < graph.length; i++) {
    if (graph[node][i] && !d_visited[i]) {
      DFS(graph, i);
    }
  }
  return d_answer;
};

const b_visited = new Array(N + 1).fill(false);
const b_answer = [];
const BFS = (graph, node) => {
  const queue = [];
  b_visited[node] = true;
  b_answer.push(node);
  queue.push(node);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] && !b_visited[i]) {
        b_visited[i] = true;
        queue.push(i);
        b_answer.push(i);
      }
    }
  }
  return b_answer;
};

console.log(DFS(graph, V).join(" "));
console.log(BFS(graph, V).join(" "));
