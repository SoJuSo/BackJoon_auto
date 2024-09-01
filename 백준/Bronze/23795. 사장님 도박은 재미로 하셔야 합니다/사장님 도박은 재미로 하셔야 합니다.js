// https://www.acmicpc.net/problem/23795

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.pop();

const sol = (n, arr) => {
  return arr.reduce((acc, cur) => acc + +cur, 0);
};

console.log(sol(N, input));
