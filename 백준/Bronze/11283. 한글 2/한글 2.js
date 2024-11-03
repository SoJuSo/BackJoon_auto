// https://www.acmicpc.net/problem/11283

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (word) => {
  // 아이디어
  // 구현
  return word.charCodeAt() - 44031;
};

console.log(sol(N));
