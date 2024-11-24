// https://www.acmicpc.net/problem/30501

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, name) => {
  // 아이디어
  // 구현
  for (let i = 0; i < pcs; i++) {
    if (name[i].includes("S")) return name[i];
  }
};

console.log(sol(N, input));
