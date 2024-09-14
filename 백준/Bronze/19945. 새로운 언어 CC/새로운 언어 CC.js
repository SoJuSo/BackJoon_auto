// https://www.acmicpc.net/problem/19945
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  // toString 객체 활용해서 구현
  if (num === 0) return 1;
  return num > 0 ? num.toString(2).length : 32;
};

console.log(sol(+input.shift()));
