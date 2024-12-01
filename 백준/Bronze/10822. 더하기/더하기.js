// https://www.acmicpc.net/problem/10822

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  return list.reduce((acc, cur) => acc + cur, 0);
};

console.log(sol(input.shift().split(",").map(Number)));
