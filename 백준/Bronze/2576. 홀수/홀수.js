// https://www.acmicpc.net/problem/2576

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const answer = [];
  list.forEach((val) => {
    if (val % 2 === 1) {
      answer.push(val);
    }
  });
  return answer.length === 0
    ? -1
    : answer.reduce((acc, cur) => acc + cur, 0) + "\n" + Math.min(...answer);
};

console.log(sol(input.map(Number)));
