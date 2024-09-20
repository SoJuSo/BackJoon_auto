// https://www.acmicpc.net/problem/1550

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (char) => {
  // 아이디어
  return parseInt(char, 16).toString(10);
};

console.log(sol(input[0]));
