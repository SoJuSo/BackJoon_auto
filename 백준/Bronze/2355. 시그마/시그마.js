// https://www.acmicpc.net/problem/2355

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([n, m]) => {
  return ((n + m) * (Math.max(n, m) - Math.min(n, m) + 1)) / 2;
};

console.log(sol(input.shift().split(" ").map(Number)));
