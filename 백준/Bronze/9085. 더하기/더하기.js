// https://www.acmicpc.net/problem/9085

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 0; i < list.length; i += 2) {
    answer.push(list[i + 1].split(" ").reduce((acc, cur) => acc + +cur, 0));
  }
  return answer.join("\n");
};

console.log(sol(N, input));
