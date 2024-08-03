// https://www.acmicpc.net/problem/13752

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  return arr.map((val) => "=".repeat(+val)).join("\n");
};

console.log(sol(N, input));
