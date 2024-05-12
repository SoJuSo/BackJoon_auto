//https://www.acmicpc.net/problem/4153

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const TC = input.length;
let answer = [];

for (let i = 0; i < TC - 1; i++) {
  const [A, B, C] = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (A === 0 && B === 0 && C === 0) break;

  A ** 2 + B ** 2 === C ** 2 ? answer.push("right") : answer.push("wrong");
}

console.log(answer.join("\n"));
