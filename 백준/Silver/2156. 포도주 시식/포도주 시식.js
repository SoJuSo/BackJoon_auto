// https://www.acmicpc.net/problem/2156

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => +v);

const dp = [];
dp[0] = 0;
dp[1] = list[0];
if (N > 1) dp[2] = list[0] + list[1];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 3] + list[i - 2] + list[i - 1], dp[i - 2] + list[i - 1]);
}

console.log(Math.max(...dp));
