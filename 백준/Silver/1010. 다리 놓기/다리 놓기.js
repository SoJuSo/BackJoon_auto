// https://www.acmicpc.net/problem/1010

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

// 아이디어
// N, M개 중 중복없는 경우의 수가 필요하다 -> 조합
const T = Number(input.shift());

// console.log(input);
// console.log(T);
const dp = Array.from(Array(30), () => Array(30).fill(0));

for (let i = 0; i < T; i++) {
  const [N, M] = input.shift().split(" ").map(Number);

  //   console.log(dp[1][3]);
  const Combine = (N, R) => {
    //   console.log(N, R, dp[N][R]);
    if (dp[N][R] !== 0) return dp[N][R];

    if (N === R || R === 0) return 1;
    dp[N][R] = Combine(N - 1, R - 1) + Combine(N - 1, R);
    return dp[N][R];
  };

  console.log(Combine(M, N));
}
