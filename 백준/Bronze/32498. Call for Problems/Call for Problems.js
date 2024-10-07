// https://www.acmicpc.net/problem/32498

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, arr) => {
  // 아이디어
  // 9현
  return arr.reduce((acc, cur) => {
    if (cur % 2 !== 0) {
      return acc + 1;
    } else return acc;
  }, 0);
};

console.log(sol(N, input.map(Number)));
