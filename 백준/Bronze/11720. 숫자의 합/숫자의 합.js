// https://www.acmicpc.net/problem/11720

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

console.log(
  input[1]
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
);
