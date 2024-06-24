// https://www.acmicpc.net/problem/2108

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const obj = {};
input.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < N; i++) {
  sum += +input[i];
  if (obj[input[i]] === undefined) {
    obj[input[i]] = 1;
  } else {
    obj[input[i]]++;
  }
}

const answer = [];

answer.push(Math.round(sum / N) || 0);
answer.push(input[N - Math.ceil(N / 2)]);
const arr = Object.entries(obj).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return b[1] - a[1];
});
answer.push(arr.length === 1 ? arr[0][0] : arr[1][1] === arr[0][1] ? arr[1][0] : arr[0][0]);
answer.push(Math.max(...input) - Math.min(...input));

console.log(answer.join("\n"));
