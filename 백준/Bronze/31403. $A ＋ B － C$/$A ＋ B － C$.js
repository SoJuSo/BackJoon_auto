// https://www.acmicpc.net/problem/31403

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([a, b, c]) => {
  const answer = [+a + +b - +c, a + b - c];
  return answer.join("\n");
};

console.log(sol(input));
