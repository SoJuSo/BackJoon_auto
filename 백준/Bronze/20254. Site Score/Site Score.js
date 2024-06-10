// https://www.acmicpc.net/problem/20254

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const list = [56, 24, 14, 6];

console.log(
  input[0].split(" ").reduce((acc, cur, i) => {
    return Number(acc) + Number(cur) * list[i];
  }, 0)
);