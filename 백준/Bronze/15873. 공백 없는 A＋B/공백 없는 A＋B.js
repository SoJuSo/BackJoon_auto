// https://www.acmicpc.net/problem/15873

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (num) => {
  // 아이디어
  if (num.length === 2) return num.split("").reduce((acc, cur) => acc + +cur, 0);
  else {
    if (num.indexOf(0) === 1) {
      return +num.slice(0, 2) + +num.slice(2);
    }
    return +num.slice(0, 1) + +num.slice(1, num.length);
  }
};

console.log(sol(N));
