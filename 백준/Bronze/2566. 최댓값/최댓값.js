// https://www.acmicpc.net/problem/2566

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (data) => {
  // 아이디어
  // 간단한 이중포문
  let cur = [-1, [0, 0]];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] > cur[0]) {
        cur[0] = data[i][j];
        cur[1] = [i + 1, j + 1];
      }
    }
  }
  return cur[0] + "\n" + cur[1].join(" ");
};

console.log(sol(input.map((v) => v.split(" ").map(Number))));
