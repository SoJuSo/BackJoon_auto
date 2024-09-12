// https://www.acmicpc.net/problem/11722
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // 아이디어
  // 가장 ~하는 ~수열 = dp
  // 모든 경우의 수를 짤라서 본다
  // N이 1000이기에 가능한듯?
  // 길어지면 어떻게 해야하려나..
  const dp = new Array(num).fill(1); // 나 자신 하나인 경우이므로 1으로 정렬

  for (let i = 0; i < num; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = ++max;
  }

  return Math.max(...dp);
};

console.log(sol(N, input.shift().split(" ").map(Number)));
