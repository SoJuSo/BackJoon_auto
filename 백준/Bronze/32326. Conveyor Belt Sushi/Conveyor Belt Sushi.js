// https://www.acmicpc.net/problem/32326

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (plates) => {
  // 아이디어
  return +plates[0] * 3 + +plates[1] * 4 + +plates[2] * 5;
};

console.log(sol(input));
