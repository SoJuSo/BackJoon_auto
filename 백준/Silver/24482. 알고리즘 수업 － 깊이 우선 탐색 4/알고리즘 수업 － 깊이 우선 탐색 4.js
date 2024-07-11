// https://www.acmicpc.net/problem/24482

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M, R] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const arr = input.map((v) => v.split(" ").map(Number));
const visited = Array(N + 1).fill(-1);

for (let [from, to] of arr) {
  graph[from].push(to);
  graph[to].push(from);
}

for (let node of graph) {
  node.sort((a, b) => b - a);
}

const dfs = (node, deep) => {
  visited[node] = deep;
  for (const next of graph[node]) {
    if (visited[next] === -1) {
      dfs(next, deep + 1);
    }
  }
};

dfs(R, 0);

console.log(visited.slice(1).join("\n"));
