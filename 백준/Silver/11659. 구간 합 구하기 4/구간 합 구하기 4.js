//https://www.acmicpc.net/problem/11659

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const sumArr = [arr[0]];
for (let i = 1; i < N; i++) {
  sumArr[i] = sumArr[i - 1] + arr[i];
}

// console.log(sumArr);

const answer = [];
for (let i = 0; i < M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  if (start === 1) {
    answer.push(sumArr[end - 1]);
  } else {
    answer.push(sumArr[end - 1] - sumArr[start - 2]);
  }
}
console.log(answer.join("\n"));
