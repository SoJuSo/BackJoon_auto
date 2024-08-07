// https://www.acmicpc.net/problem/11053

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const sol = (n, arr) => {
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    const prevArr = arr.slice(0, i);
    const temp = [];

    for (let j = 0; j <= i; j++) {
      if (prevArr[j] < arr[i]) {
        temp.push(dp[j]);
      }
    }

    if (temp.length !== 0) {
      dp[i] += Math.max(...temp);
    }
  }

  return Math.max(...dp);
};

console.log(sol(N, list));