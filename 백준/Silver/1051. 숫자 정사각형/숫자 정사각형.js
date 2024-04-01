// https://www.acmicpc.net/problem/1051

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

const [N, M] = input.shift().split(" ").map(Number);
// console.log(N, M);
// 많아봤자 2500개임
// 브루트포스 = 다 봐도 된다?

const minWidth = N < M ? N : M;
let maxSize = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const point = input[i][j];
    // console.log(point);
    // console.log();
    // 남은 부분을 어떻게 돌려야하는가. 다음 줄이 아닌, 남은 부분에 대해서 반복문을 돌려야함
    for (let k = j + 1; k < M; k++) {
      const target = input[i][k];
      //   console.log(target);
      if (point === target) {
        const width = k - j + 1;
        // console.log(i, j, k, width);
        if (i + width - 1 < N) {
          if (
            point === input[i + width - 1][j] &&
            input[i + width - 1][j] === input[i + width - 1][k]
          ) {
            const newSize = width * width;
            maxSize < newSize ? (maxSize = newSize) : null;
          }
        }
      }
    }
    // console.log();
  }
  //   console.log();
}

console.log(maxSize);
