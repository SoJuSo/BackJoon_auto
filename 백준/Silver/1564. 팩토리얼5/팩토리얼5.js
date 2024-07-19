// https://www.acmicpc.net/problem/1564

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  const dp = [];
  (dp[0] = 1n), (dp[1] = 1n), (dp[2] = 2n), (dp[3] = 6n), (dp[4] = 24n);
  for (let i = 5n; i <= BigInt(n); i++) {
    let temp = i * dp[i - 1n];
    while (temp % 10n === 0n) {
      temp /= 10n;
    }
    dp[i] = temp % BigInt(10 ** 12);
  }

  const cur = String(dp[n]);
  let answer = "";

  for (let i = cur.length - 1; i >= 0; i--) {
    if (answer.length === 5) break;

    if (answer.length > 0) {
      answer = cur[i] + answer;
    } else if (answer.length === 0 && cur[i] != 0) {
      answer = cur[i] + answer;
    }
  }
  return answer;
};

console.log(sol(N));