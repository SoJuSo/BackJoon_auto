// https://www.acmicpc.net/problem/14495

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (fibo) => {
  // 아이디어
  // 피보나치
  const dp = [0n];
  dp[1] = dp[2] = dp[3] = 1n;
  for (let i = 4; i <= fibo; i++) {
    dp[i] = dp[i - 1] + dp[i - 3];
  }
  return dp[fibo].toString();
};

console.log(sol(N));
