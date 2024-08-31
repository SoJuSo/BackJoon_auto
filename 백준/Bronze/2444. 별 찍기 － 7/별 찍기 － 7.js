// https://www.acmicpc.net/problem/2444

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  const answer = [];

  for (let i = 1; i < n; i++) {
    answer.push(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }

  for (let i = n; i > 0; i--) {
    answer.push(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }

  return answer.join("\n");
};

console.log(sol(N));
