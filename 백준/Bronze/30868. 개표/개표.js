// https://www.acmicpc.net/problem/30868

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];

  arr.forEach((val) => {
    answer.push("++++ ".repeat(val / 5) + "|".repeat(val % 5));
  });

  return answer.join("\n");
};

console.log(sol(N, input.map(Number)));
