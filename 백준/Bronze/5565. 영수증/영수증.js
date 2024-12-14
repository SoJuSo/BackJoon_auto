// https://www.acmicpc.net/problem/5565

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  return pcs - list.reduce((acc, cur) => acc + cur, 0);
};

console.log(sol(N, input.map(Number)));
