//https://www.acmicpc.net/problem/1546

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const N = Number(input.shift());
const Grade = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const M = Grade[0];
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += (Grade[i] / M) * 100;
}
console.log(sum / N);
