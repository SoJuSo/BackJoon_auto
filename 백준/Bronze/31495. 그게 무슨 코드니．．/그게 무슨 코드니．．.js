// https://www.acmicpc.net/problem/31495

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  // 아이디어
  // 구현
  return str.split("").reduce((acc, cur) => {
    if (cur === '"') {
      return acc + 1;
    } else return acc;
  }, 0) === 2 &&
    str[0] === '"' &&
    str[str.length - 1] === '"' &&
    str !== '""'
    ? str.replaceAll('"', "")
    : "CE";
};

console.log(sol(input.shift()));
