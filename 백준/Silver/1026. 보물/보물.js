// https://www.acmicpc.net/problem/8892

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();

const sol = (tc, arr) => {
  // 입출력 작고 시간, 메모리 큼, 단순 구현
  const prev = arr
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const next = arr
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return prev.reduce((acc, cur, index) => {
    return acc + cur * next[index];
  }, 0);
};

console.log(sol(TC, input));
