// https://www.acmicpc.net/problem/9095

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

input.shift();

const sol = (arr) => {
  const ans = [];
  const dp = [];

  (dp[0] = 1), (dp[1] = 2), (dp[2] = 4);

  for (let i = 3; i <= Math.max(...arr); i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  for (let j = 0; j < arr.length; j++) {
    ans.push(dp[arr[j] - 1]);
  }

  return ans.join("\n");
};

console.log(sol(input.map(Number)));
