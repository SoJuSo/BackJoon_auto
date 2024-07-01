// https://www.acmicpc.net/problem/18110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => +v);
const averager = Math.round(N * 0.15);

console.log(
  N === 0
    ? 0
    : Math.round(
        list
          .sort((a, b) => a - b)
          .slice(averager, N - averager)
          .reduce((a, c) => a + c, 0) /
          (N - 2 * averager)
      )
);
