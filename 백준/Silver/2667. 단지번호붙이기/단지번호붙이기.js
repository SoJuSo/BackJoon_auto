// https://www.acmicpc.net/problem/2667

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  let count = 0;
  let group = 0;

  const dfs = (x, y) => {
    const dx = [1, -1, 0, 0],
      dy = [0, 0, -1, 1];

    if (arr[x][y] == 1 && !visited[x][y]) {
      visited[x][y] = true;
      count++;

      for (let i = 0; i < 4; i++) {
        const [newX, newY] = [+x + dx[i], +y + dy[i]];
        if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
          dfs(newX, newY);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] == 1 && !visited[i][j]) {
        dfs(i, j);
        group++;
        answer.push(count);
        count = 0;
      }
    }
  }

  return group + "\n" + answer.sort((a, b) => a - b).join("\n");
};

console.log(sol(N, input));
