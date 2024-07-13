// https://www.acmicpc.net/problem/2747

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
const list = input.map((v) => v.split(" ").map(Number));

const bfs = (n, m, start, graph) => {
  const answer = Array.from(Array(n), () => Array(m).fill(0));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const queue = [];
  queue.push(start);

  while (queue.length) {
    const cur = queue.shift();
    const [y, x] = cur;

    for (let i = 0; i < 4; i++) {
      if (
        x + dx[i] >= 0 &&
        x + dx[i] < M &&
        y + dy[i] >= 0 &&
        y + dy[i] < n &&
        graph[y + dy[i]][x + dx[i]]
      ) {
        if (!visited[y + dy[i]][x + dx[i]]) {
          answer[y + dy[i]][x + dx[i]] = answer[y][x] + 1;
          queue.push([y + dy[i], x + dx[i]]);
          visited[y + dy[i]][x + dx[i]] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && answer[i][j] === 0) {
        answer[i][j] = -1;
      }
    }
  }
  answer[start[0]][start[1]] = 0;

  return answer.map((v) => v.join(" ")).join("\n");
};

const sol = (n, m, arr) => {
  let start = [0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) {
        start = [i, j];
      }
    }
  }

  return bfs(n, m, start, arr);
};

console.log(sol(N, M, list));
