//https://www.acmicpc.net/problem/11724

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

// const graph = {};

// 방향이 없다 -> 양방향 연결 리스트 구현

// for (let i = 0; i < M; i++) {
//   const [u, v] = input[i].split(" ").map(Number);
//   if (!graph[u]) {
//     graph[u] = [v];
//     // graph[v] = [u];
//   } else {
//     graph[u].push(v);
//     // console.log(u, v);
//     // graph[v].push(u);
//   }
//   if (!graph[v]) {
//     graph[v] = [u];
//   } else {
//     graph[v].push(u);
//   }
// }

const graph = [...Array(N + 1)].map(() => []);

for (let i = 0; i < M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  //   console.log(u, v);
  graph[u].push(v);
  graph[v].push(u);
}

// console.log(graph);

// console.log(Object.entries(graph));
const visitDone = Array.from({ length: N + 1 }).fill(false);
visitDone[0] = true;

// bfs 템플릿
const bfs = (graph, start) => {
  let visitQueue = [];

  visitQueue.push(start);

  while (visitQueue.length !== 0) {
    const cur = visitQueue.shift();
    // if (!visited.includes(cur)) {
    //   visitDone[cur] = true;
    //   visited.push(cur);
    //   //   console.log(graph);
    //   visitQueue = [...visitQueue, ...graph[cur]];
    // }
    for (let next of graph[cur]) {
      if (!visitDone[next]) {
        visitDone[next] = true;
        visitQueue.push(next);
      }
    }
    // console.log(visited);
  }
};

let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (!visitDone[i]) {
    bfs(graph, i);
    cnt++;
  }
}

console.log(cnt);

// 방문 처리를 어떻게 해줘야하는가? -> 전체를 보자 어차피 1000개밖에 안됌
// 다 연결되면 1,000,000 O(n^2) 안에 가능할듯?
// 메모리 초과
// console.log(N, M, graph);
