// https://www.acmicpc.net/problem/15726

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([A, B, C]) => {
  // 아이디어
  // 구현
  return Math.floor(Math.max((A / B) * C, (A * B) / C));
};

console.log(sol(input.shift().split(" ").map(Number)));
