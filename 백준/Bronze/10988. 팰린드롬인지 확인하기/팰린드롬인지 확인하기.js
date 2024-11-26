// https://www.acmicpc.net/problem/10988

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  // 아이디어
  // 구현
  return str.slice(0, str.length / 2) ===
    str
      .slice(Math.round(str.length / 2))
      .split("")
      .reverse()
      .join("")
    ? 1
    : 0;
};

console.log(sol(input[0]));
