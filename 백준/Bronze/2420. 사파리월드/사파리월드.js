//https://www.acmicpc.net/problem/2420

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(
  input
    .shift()
    .split(" ")
    .map(Number)
    .reduce((N, M) => Math.abs(N - M))
);
