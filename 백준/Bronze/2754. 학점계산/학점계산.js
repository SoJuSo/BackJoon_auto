//https://www.acmicpc.net/problem/2754

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const hash = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  F: 0.0,
};

console.log(
  input[0][1] === "+"
    ? (hash[input[0][0]] + 0.3).toFixed(1)
    : input[0][1] === "-"
    ? (hash[input[0][0]] - 0.3).toFixed(1)
    : hash[input[0][0]].toFixed(1)
);
