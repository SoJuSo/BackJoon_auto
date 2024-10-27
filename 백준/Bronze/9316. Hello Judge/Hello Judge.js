// https://www.acmicpc.net/problem/9316

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 1; i <= num; i++) {
    answer.push(`Hello World, Judge ${i}!`);
  }
  return answer.join("\n");
};

console.log(sol(+input.shift()));
