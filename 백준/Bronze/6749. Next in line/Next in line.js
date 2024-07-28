// https://www.acmicpc.net/problem/6749

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const Y = +input.shift();
const M = +input.shift();

const sol = (y, m) => {
  return m + Math.abs(y - m);
};

console.log(sol(Y, M));
