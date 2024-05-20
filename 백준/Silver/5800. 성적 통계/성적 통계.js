//https://www.acmicpc.net/problem/5800

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const K = Number(input.shift());

const answer = [];
for (let TC = 0; TC < K; TC++) {
  const arr = input[TC].split(" ")
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);
  let max = -1;
  let min = 101;
  let gap = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    const curGap = Math.abs(arr[i] - arr[i - 1]);
    if (curGap > gap) {
      gap = curGap;
    }
  }

  answer.push(`Class ${TC + 1}\nMax ${max}, Min ${min}, Largest gap ${gap}`);
}

console.log(answer.join("\n"));
