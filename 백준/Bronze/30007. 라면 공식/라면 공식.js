// https://www.acmicpc.net/problem/30007

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const answer = [];
for (let i = 0; i < N; i++) {
  const [A, B, X] = input[i].split(" ").map(Number);
  answer.push(A * (X - 1) + B);
}
console.log(answer.join("\n"));
