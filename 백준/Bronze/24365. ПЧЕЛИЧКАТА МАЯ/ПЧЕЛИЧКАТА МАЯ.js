// https://www.acmicpc.net/problem/24365

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([A, B, C]) => {
  // 아이디어
  // 구현
  return C - (A + B + C) / 3 + ((A + B + C) / 3 - A);
};

console.log(sol(input.shift().split(" ").map(Number)));
