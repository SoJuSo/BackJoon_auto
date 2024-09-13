// https://www.acmicpc.net/problem/11399
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // 아이디어
  // 정렬 & 합 구하기
  // dp로 메모이제이션하기

  arr.sort((a, b) => a - b);
  const dp = [];
  dp[0] = arr[0];
  for (let i = 1; i < num; i++) {
    dp[i] = dp[i - 1] + arr[i];
  }
  // console.log(dp);

  return dp.reduce((acc, cur) => acc + cur, 0);
};

console.log(sol(N, input.shift().split(" ").map(Number)));
