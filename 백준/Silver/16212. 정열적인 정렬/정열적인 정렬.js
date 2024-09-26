// https://www.acmicpc.net/problem/16212

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, arr) => {
  // 아이디어
  // 단순 정렬?

  return arr.sort((a, b) => a - b).join(" ");
};

console.log(sol(N, input.shift().split(" ").map(Number)));
