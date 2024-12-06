// https://www.acmicpc.net/problem/32775

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  return list[0] > list[1] ? "flight" : "high speed rail";
};

console.log(sol(input.map(Number)));
