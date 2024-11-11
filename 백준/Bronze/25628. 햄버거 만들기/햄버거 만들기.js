// https://www.acmicpc.net/problem/25628

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (bread, patty) => {
  // 아이디어
  return Math.min(Math.floor(bread / 2), patty);
};

console.log(sol(N, M));
