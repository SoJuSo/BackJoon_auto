// https://www.acmicpc.net/problem/9849

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

let x1 = -Infinity,
  x2 = Infinity;

let y1 = -Infinity,
  y2 = Infinity;

for (let i = 0; i < N; i++) {
  const arr = input.shift().split(" ").map(Number);
  x1 = Math.max(x1, arr[0]);
  y1 = Math.max(y1, arr[2]);
  x2 = Math.min(x2, arr[1]);
  y2 = Math.min(y2, arr[3]);
}

console.log(Math.max(x2 - x1, 0) * Math.max(y2 - y1, 0));
