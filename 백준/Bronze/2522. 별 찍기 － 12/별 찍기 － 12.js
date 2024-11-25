// https://www.acmicpc.net/problem/2522

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 1; i <= num; i++) {
    answer.push(" ".repeat(num - i) + "*".repeat(i));
  }
  const reverse = [...answer].reverse();
  reverse.shift();
  return answer.join("\n") + "\n" + reverse.join("\n");
};

console.log(sol(N));
