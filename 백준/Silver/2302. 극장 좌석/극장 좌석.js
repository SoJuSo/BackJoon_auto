//https://www.acmicpc.net/problem/2302

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const M = +input.shift();
// 나머지 인풋이 고정석
// 2 3 2 1 2 2 1 2 2

// VIP가 분기점
// VIP 사이는 합연산
const dp = [];
dp[0] = dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

// console.log(dp);

let cur = 0;
const answer = [];
for (let i = 0; i < M; i++) {
  answer.push(dp[+input[i] - 1 - cur]);
  cur = +input[i];
}
answer.push(dp[N - cur]);

console.log(answer.reduce((acc, cur) => acc * cur));
