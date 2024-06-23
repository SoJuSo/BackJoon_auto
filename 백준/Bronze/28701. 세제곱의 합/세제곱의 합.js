// https://www.acmicpc.net/problem/28701

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const answer = [];
for (let i = 1; i <= 3; i++) {
  let cur = 0;
  for (let j = 1; j <= N; j++) {
    cur += i === 2 ? j : j ** i;
  }
  answer.push(i === 2 ? cur ** 2 : cur);
}
console.log(answer.join("\n"));
