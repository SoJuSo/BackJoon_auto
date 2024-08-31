// https://www.acmicpc.net/problem/2445

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push("*".repeat(i) + " ".repeat((n - i) * 2) + "*".repeat(i));
  }

  for (let i = n - 1; i > 0; i--) {
    answer.push("*".repeat(i) + " ".repeat((n - i) * 2) + "*".repeat(i));
  }

  return answer.join("\n");
};

console.log(sol(N));
