// https://www.acmicpc.net/problem/30824

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const testcase = +input.shift();

const dp = [BigInt(0), BigInt(1), BigInt(1)];
for (let i = 3; ; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
  if (dp[i] > 10n ** 16n) break;
}

const sum2 = new Set();
const sum3 = new Set();

for (let i = 1; i < dp.length; i++) {
  for (let j = 1; j < dp.length; j++) {
    sum2.add(dp[i] + dp[j]);
    for (let k = 1; k < dp.length; k++) {
      sum3.add(dp[i] + dp[j] + dp[k]);
    }
  }
}

const sol = (k, x) => {
  if (k === 1n) {
    return dp.includes(x);
  } else if (k === 2n) {
    return sum2.has(x);
  } else {
    return sum3.has(x);
  }
};

const answer = [];
for (let a = 0; a < testcase; a++) {
  const [k, x] = input[a].split(" ").map(BigInt);
  answer.push(sol(k, x) ? "YES" : "NO");
}
console.log(answer.join("\n"));
