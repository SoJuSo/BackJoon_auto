// https://www.acmicpc.net/problem/9656

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  return n % 2 !== 0 ? "CY" : "SK";
};

console.log(sol(N));
