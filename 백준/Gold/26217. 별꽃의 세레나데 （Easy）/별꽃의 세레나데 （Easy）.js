// https://www.acmicpc.net/problem/26217

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
let answer = 0;
for (let i = 1; i < N + 1; i++) {
  answer += N / i;
}
console.log(answer);
