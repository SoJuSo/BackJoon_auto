// https://www.acmicpc.net/problem/5532

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([L, A, B, C, D]) => {
  // 아이디어
  // 구현
  return L - Math.max(Math.ceil(A / C), Math.ceil(B / D));
};

console.log(sol(input.map(Number)));
