// https://www.acmicpc.net/problem/13866

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([A, B, C, D]) => {
  // 아이디어
  // 구현
  return Math.abs(A + D - (B + C));
};

console.log(
  sol(
    input
      .shift()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  )
);
