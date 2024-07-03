// https://www.acmicpc.net/problem/12847

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 타임라인
// 1초, 반목문 1회 수행

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const list = input
  .shift()
  .split(" ")
  .map((v) => +v);

const answer = [];
for (let i = 0; i < N - M; i++) {
  let cur = 0;
  for (let j = i; j < i + M; j++) {
    cur += list[j];
  }
  answer.push(cur);
}
console.log(Math.max(...answer));