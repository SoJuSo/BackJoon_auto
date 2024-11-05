// https://www.acmicpc.net/problem/15885

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([a, b]) => {
  // 아이디어
  // 구현
  const OneCycle = 43200; // 12hr = 43200s

  const match = (OneCycle * b) / Math.abs(a - b);

  const total = 86400;
  const matches = Math.floor(total / match);

  return matches;
};

console.log(sol(input.shift().split(" ").map(Number)));
