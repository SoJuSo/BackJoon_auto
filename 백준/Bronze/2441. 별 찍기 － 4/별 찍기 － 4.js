// https://www.acmicpc.net/problem/2441

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  return Array.from({ length: n })
    .map((_, i) => " ".repeat(n - i - 1) + "*".repeat(i + 1))
    .reverse()
    .join("\n");
};

console.log(sol(N));