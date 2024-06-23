// https://www.acmicpc.net/problem/25372

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(input[i].length >= 6 && input[i].length <= 9 ? "yes" : "no");
}
console.log(answer.join("\n"));
