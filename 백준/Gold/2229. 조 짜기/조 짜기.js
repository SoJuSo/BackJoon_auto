// https://www.acmicpc.net/problem/2229

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  let dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let minv = arr[i - 1];
    let maxv = arr[i - 1];

    for (let j = i - 1; j >= 0; j--) {
      maxv = Math.max(arr[j], maxv);
      minv = Math.min(arr[j], minv);
      dp[i] = Math.max(dp[i], dp[j] + maxv - minv);
    }
  }

  return dp[N];
};

console.log(sol(N, input.shift().split(" ").map(Number)));
