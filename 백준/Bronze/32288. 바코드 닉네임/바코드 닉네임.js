// https://www.acmicpc.net/problem/32288

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const str = input.shift();

const sol = (text) => {
  // 아이디어
  // 어퍼케이스
  // 로어케이스

  return text.replace(/./g, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()));
};

console.log(sol(str));
