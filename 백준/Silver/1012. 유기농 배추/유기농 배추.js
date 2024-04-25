const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const T = Number(input.shift());

// 아이디어
// 각 테스트케이스 별로 그래프를 만든다.
// 지뢰찾기처럼 찾고 가야할거같은데?
// 템플릿?
// [dx, dy] = [0, 1];
// 순회 그래프
// 방문 그래프

for (let TC = 0; TC < T; TC++) {
  // TC만큼 반복
  const [row, col, cabageCount] = input.shift().split(" ").map(Number);
  //   console.log(row, col, cabageCount);
  let graph = Array.from(Array(col), () => new Array(row).fill(0));
  let visited = Array.from(Array(col), () => new Array(row).fill(false));
  let answer = 0;

  for (let i = 0; i < cabageCount; i++) {
    // 좌표를 거꾸로 주누..?
    const [cordX, cordY] = input.shift().split(" ").map(Number);
    graph[cordY][cordX] = 1;
  }

  // dfs 템플릿에 상하좌우 체크
  const dfs = (col_target, row_target, col, row) => {
    // 상하좌우
    const horizontal = [0, 0, -1, 1];
    const vertical = [-1, 1, 0, 0];

    visited[col_target][row_target] = true;

    for (let i = 0; i < 4; i++) {
      next_col = col_target + vertical[i];
      next_row = row_target + horizontal[i];
      //   console.log(next_col, next_row);
      if (next_col >= 0 && next_col < col && next_row >= 0 && next_row < row) {
        if (graph[next_col][next_row] === 1 && !visited[next_col][next_row]) {
          //   console.log(graph, visited);
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

  //   console.log(graph, visited);
  console.log(answer);
}
