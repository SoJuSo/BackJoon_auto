// https://www.acmicpc.net/problem/15921

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  if (num === 0) return "divide by zero";
  const arr = input
    .shift()
    .split(" ")
    .map((v) => +v);

  const average = arr.reduce((a, c) => a + c, 0) / num;
  const percentage = arr.reduce((a, c) => a + c / num, 0);

  return (average / percentage).toFixed(2);
};

console.log(sol(N));
