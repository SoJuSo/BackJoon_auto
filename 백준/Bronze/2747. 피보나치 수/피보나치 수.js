// https://www.acmicpc.net/problem/2747

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const fibo = (num) => {
  const dp = [];
  (dp[0] = 0), (dp[1] = 1), (dp[2] = 1);
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp;
};

const sol = (n) => {
  return fibo(n)[n];
};

console.log(sol(N));
