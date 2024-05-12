//https://www.acmicpc.net/problem/15829

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const L = Number(input.shift());
const word = input[0].split("");
const primeNumber = 31;

const answer = [];
for (let i = 0; i < L; i++) {
  answer.push((word[i].charCodeAt() - 96) * primeNumber ** i);
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));
