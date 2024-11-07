// https://www.acmicpc.net/problem/15885

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (N) => {
  // 아이디어
  // 구현
  const dp = [];
  dp[0] = 0n;
  dp[1] = 1n;
  dp[2] = 1n;
  dp[3] = 2n;
  for (let i = 4; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N].toString();
};

console.log(sol(N));
