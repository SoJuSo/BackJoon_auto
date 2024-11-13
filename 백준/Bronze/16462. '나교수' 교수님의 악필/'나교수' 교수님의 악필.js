// https://www.acmicpc.net/problem/16462

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  return Math.round(
    list.reduce((acc, cur) => {
      if (cur > 99) return acc + 100;
      else return acc + cur;
    }, 0) / pcs
  );
};

console.log(sol(N, input.map((v) => v.replaceAll(/[06]/g, 9)).map(Number)));
