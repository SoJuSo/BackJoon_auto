// https://www.acmicpc.net/problem/11721

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  // 아이디어
  const answer = [];
  for (let i = 0; i < str.length; i += 10) {
    answer.push(str.substring(i, i + 10));
  }
  return answer.join("\n");
};

console.log(sol(input[0]));
