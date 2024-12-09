// https://www.acmicpc.net/problem/32929

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (num) => {
  // 아이디어
  return num % 3 === 0 ? "S" : num % 3 === 1 ? "U" : "O";
};

console.log(sol(N));
