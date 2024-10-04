// https://www.acmicpc.net/problem/25640

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 구현
  const jinho = arr.shift();
  const N = +arr.shift();

  return arr.reduce((acc, cur) => (cur === jinho ? acc + 1 : acc), 0);
};

console.log(sol(input));
