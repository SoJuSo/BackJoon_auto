// https://www.acmicpc.net/problem/14721

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const arr = [];
let min = Infinity,
  minA = 0,
  minB = 0;

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let a = 1; a <= 100; a++) {
  for (let b = 1; b <= 100; b++) {
    let rss = 0;
    for (let i = 0; i < N; i++) {
      const cur = arr[i][0] * a + b - arr[i][1];
      rss += cur ** 2;
    }
    if (min > rss) {
      min = rss;
      minA = a;
      minB = b;
    }
  }
}

console.log(minA, minB);
