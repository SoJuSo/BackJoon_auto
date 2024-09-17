// https://www.acmicpc.net/problem/17291

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (year) => {
  // 아이디어
  // 일단 100퍼 DP
  // 하지만 점화식이 복잡 혹은 어렵다.
  // 기존의 기록을 활용해야함
  // 매년 1월 분열
  // 1 - 1
  // 2 - 2
  // 3 - 4
  // 4 - 8 - 1 = 7
  // 5 - 14 - 1 = 13
  // 6 - 26 - 2 = 24
  // 7 - 48 - 4 = 44
  // 8 - 88 - 7 = 81

  const dp = [];
  (dp[0] = 0), (dp[1] = 1), (dp[2] = 2), (dp[3] = 4), (dp[4] = 7);

  for (let i = 5; i <= year; i++) {
    if (i % 2) dp[i] = dp[i - 1] * 2;
    else dp[i] = 2 * dp[i - 1] - dp[i - 4] - dp[i - 5];
  }

  return dp[year];
};

console.log(sol(N));
