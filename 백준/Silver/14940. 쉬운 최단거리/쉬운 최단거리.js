// https://www.acmicpc.net/problem/32314

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
const list = input.map((v) => v.split(" ").map(Number));

const sol = (col, row, gp) => {
  // 아이디어
  // 구현

  const bfs = (n, m, startNode, graph) => {
    const dx = [1, -1, 0, 0],
      dy = [0, 0, -1, 1];
    const answer = Array.from(Array(n), () => Array(m).fill(0));
    const visited = Array.from(Array(n), () => Array(m).fill(0));

    const queue = [startNode];

    while (queue.length) {
      const [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        if (
          x + dx[i] >= 0 &&
          x + dx[i] < M &&
          y + dy[i] >= 0 &&
          y + dy[i] < N &&
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

    // 시작점 보정
    answer[start[0]][start[1]] = 0;

    // 0보정
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === 1 && answer[i][j] === 0) {
          answer[i][j] = -1;
        }
      }
    }

    return answer.map((v) => v.join(" ")).join("\n");
  };

  let start = [0, 0];
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (gp[i][j] === 2) {
        start = [i, j];
        break;
      }
    }
  }

  return bfs(col, row, start, gp);
};

console.log(sol(N, M, list));
