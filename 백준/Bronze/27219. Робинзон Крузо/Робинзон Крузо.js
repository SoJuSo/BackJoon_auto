//https://www.acmicpc.net/problem/27219

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const answer = [];

for (let i = 0; i < ~~(N / 5); i++) {
  answer.push("V");
}

for (let i = 0; i < N % 5; i++) {
  answer.push("I");
}

console.log(answer.join(""));
