const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const T = Number(input.shift());

for (let TC = 0; TC < T; TC++) {
  const [row, col, cabageCount] = input.shift().split(" ").map(Number);
  let graph = Array.from(Array(col), () => new Array(row).fill(0));
  let visited = Array.from(Array(col), () => new Array(row).fill(false));
  let answer = 0;

  for (let i = 0; i < cabageCount; i++) {
    const [cordX, cordY] = input.shift().split(" ").map(Number);
    graph[cordY][cordX] = 1;
  }

  const dfs = (col_target, row_target, col, row) => {
    const horizontal = [0, 0, -1, 1];
    const vertical = [-1, 1, 0, 0];

    visited[col_target][row_target] = true;

    for (let i = 0; i < 4; i++) {
      next_col = col_target + vertical[i];
      next_row = row_target + horizontal[i];
      if (next_col >= 0 && next_col < col && next_row >= 0 && next_row < row) {
        if (graph[next_col][next_row] === 1 && !visited[next_col][next_row]) {
          dfs(next_col, next_row, col, row);
        }
      }
    }
  };

  for (let j = 0; j < col; j++) {
    for (let k = 0; k < row; k++) {
      if (graph[j][k] === 1 && !visited[j][k]) {
        dfs(j, k, col, row);
        answer++;
      }
    }
  }

  console.log(answer);
}
