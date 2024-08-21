// https://www.acmicpc.net/problem/2442

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (n) => {
  const answer = [];
  for (let i = n - 1; i >= 0; i--) {
    answer.push(`${" ".repeat(i)}${"*".repeat(2 * (n - i) - 1)}`);
  }
  return answer.join("\n");
};

console.log(sol(+input.shift()));
