// https://www.acmicpc.net/problem/4458

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  return list.map((v) => v[0].toUpperCase() + v.slice(1, v.length)).join("\n");
};

console.log(sol(N, input));
