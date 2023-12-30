// https://www.acmicpc.net/problem/1834

const fs = require("fs");
// const input = fs.readFileSync("./0_example.txt").toString().split("\r\n"); //vscode
const input = fs.readFileSync("/dev/stdin").toString().split("\n"); // 백준

// console.log(Number(input[0]));
const N = Number(input[0]);

let answer = BigInt(0);
for (let i = 1; i < N; i++) {
  answer += BigInt(N * i + i);
}

console.log(answer.toString());
