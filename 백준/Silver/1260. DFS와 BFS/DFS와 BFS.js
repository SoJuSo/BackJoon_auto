// https://www.acmicpc.net/problem/1260
// 240622

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M, V] = input.shift().split(" ").map(Number);
const line = input.map((v) => v.split(" ").map(Number));
let graph = [...Array(N + 1)].map(() => []);
let visited = Array.from({ length: N + 1 }, () => 0);

for (let [from, to] of line) {
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

const ansDfs = [];
const ansBfs = [];
const queue = [];

function dfs(cnt) {
  if (ansDfs.length === N) return;
  // 최대 방문 정점 수는 최대 정점 번호보다 같거나 적어야 한다.
  ansDfs.push(cnt);
  visited[cnt] = 1;
  for (let next of graph[cnt]) {
    if (!visited[next]) {
      visited[next] = 1;
      dfs(next);
    }
  }
}

dfs(V);

visited = visited.map(() => 0);
function bfs() {
  queue.push(V);
  visited[V] = 1;
  while (queue.length !== 0) {
    const now = queue.shift();
    ansBfs.push(now);
    for (let next of graph[now]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = 1;
      }
    }
  }
}

bfs();

console.log(ansDfs.join(" "));
console.log(ansBfs.join(" "));
