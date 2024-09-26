// https://www.acmicpc.net/problem/25373

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (videos) => {
  // 아이디어
  // 단순 구?현
  if (+videos == 1) return 1;
  else if (+videos <= 3) return 2;
  else if (+videos <= 6) return 3;
  else if (+videos <= 10) return 4;
  else if (+videos <= 15) return 5;
  else if (+videos <= 21) return 6;
  else return ((BigInt(videos) - 22n) / 7n + 7n).toString();
};

console.log(sol(N));
