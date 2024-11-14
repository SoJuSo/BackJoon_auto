// https://www.acmicpc.net/problem/11719

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const sol = (list) => {
  // 아이디어
  return list.join("\n");
};

console.log(sol(input));
