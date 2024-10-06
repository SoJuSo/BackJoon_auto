// https://www.acmicpc.net/problem/32458

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  // 구현
  return num.split(".")[0];
};

console.log(sol(input.shift()));
