// https://www.acmicpc.net/problem/5524

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  return arr.map((val) => val.toLowerCase()).join("\n");
};

console.log(sol(N, input));
