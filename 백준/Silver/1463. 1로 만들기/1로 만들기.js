//https://www.acmicpc.net/problem/1463

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const target = Number(input.shift());
const dp = Array(10 ** 6 + 1).fill(333334);
dp[1] = 0;
dp[2] = dp[3] = 1;

let count = 0;

// X 3, X 2, + 1

for (let i = 4; i <= target; i++) {
  //   if (target - climber === 1) {
  //     climber++;
  //   } else if ((target - climber) % 3 === 0) {
  //     climber *= 3;
  //   } else if ((target - climber) % 2 === 0) {
  //     climber *= 2;
  //   } else {
  //     climber *= 3;
  //   }

  if (i % 6 === 0) {
    dp[i] = Math.min(Math.min(dp[i / 3], dp[i / 2]), dp[i - 1]) + 1;
  } else if (i % 2 === 0 && i % 3 !== 0) {
    dp[i / 2] + 1 > dp[i - 1] + 1 ? (dp[i] = dp[i - 1] + 1) : (dp[i] = dp[i / 2] + 1);
  } else if (i % 2 !== 0 && i % 3 === 0) {
    dp[i / 3] + 1 > dp[i - 1] + 1 ? (dp[i] = dp[i - 1] + 1) : (dp[i] = dp[i / 3] + 1);
  } else {
    dp[i] = dp[i - 1] + 1;
  }

  count++;
}

console.log(dp[target]);

// 100 -> 50 -> 25 -> 24 -> 8 -> 4 -> 2 -> 1
// 111 -> 37 -> 36 -> 12 -> 4 -> 2 -> 1

// 반례 i % 6 === 0
// 642
