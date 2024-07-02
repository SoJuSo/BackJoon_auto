// https://www.acmicpc.net/problem/2467

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input
  .shift()
  .split(" ")
  .map((v) => +v);

let left = 0;
let right = N - 1;

let sub = Math.abs(list[left] + list[right]);
let minAnswer = list[left];
let maxAnswer = list[right];

while (left < right) {
  const mid = list[left] + list[right];
  if (Math.abs(mid) < sub) {
    sub = Math.abs(mid);
    minAnswer = list[left];
    maxAnswer = list[right];
  }

  if (sub == 0) break;

  if (mid < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(minAnswer, maxAnswer);
