// https://www.acmicpc.net/problem/2745

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  return parseInt(list[0], list[1]);
};

console.log(sol(input[0].split(" ")));
