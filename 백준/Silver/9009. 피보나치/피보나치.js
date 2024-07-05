// https://www.acmicpc.net/problem/9009

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();
const dp = [];
dp[0] = 0;
dp[1] = 1;

for (let i = 2; i < 46; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

const sol = (TC, arr) => {
  const answer = [];
  for (let i = 0; i < TC; i++) {
    let cur = +arr[i];
    const cur_answer = [];
    for (let j = 45; j >= 1; j--) {
      if (cur >= dp[j]) {
        cur_answer.push(dp[j]);
        cur -= dp[j];
      }
    }
    answer.push(cur_answer.reverse().join(" "));
  }

  return answer.join("\n");
};

console.log(sol(n, input));
