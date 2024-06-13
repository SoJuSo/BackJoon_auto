//https://www.acmicpc.net/problem/2512

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const M = +input.pop();
const list = input[0].split(" ").map(Number);

let start = 1;
let end = Math.max(...list);
let answer = 0;

while (start <= end) {
  let mid = ~~((start + end) / 2);

  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += list[i] > mid ? mid : list[i];
  }

  if (sum <= M) {
    start = mid + 1;
    answer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(answer);
