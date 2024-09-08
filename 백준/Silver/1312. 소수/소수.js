// https://www.acmicpc.net/problem/1312

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([a, b, n]) => {
  for (let i = 0; i < n; i++) {
    a = (a - Math.floor(a / b) * b) * 10;
  }

  return Math.floor(a / b);
};

console.log(sol(input.shift().split(" ").map(Number)));
