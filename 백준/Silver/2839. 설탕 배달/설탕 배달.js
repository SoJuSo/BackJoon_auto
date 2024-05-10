//https://www.acmicpc.net/problem/2839

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const N = Number(input.shift());

/*
// for문으로도 풀리긴하는듯?
const solution = (num) => {
    const maxThree = num / 3;
    const maxFive = num / 5;
    //   console.log(maxFive, maxThree);
    for (let i = 0; i <= maxThree; i++) {
        for (let j = 0; j <= maxFive; j++) {
            if (i * 3 + j * 5 === num) {
                // console.log(i, j);
                console.log(i + j);
                return;
            }
        }
    }
    // 아무것도 출력이 안될 경우
    console.log(-1);
    return;
};
*/

// dp << 핵심 개념은 이전에 계산한 값을 기억한다.
const solution = (num) => {
  // 맥시멈 길이 + 1
  let dp = Array.from({ length: 5001 }).fill(-1);
  //   console.log(dp);
  dp[3] = dp[5] = 1;
  // 얼리 리턴
  if (num < 6) return dp[num];

  for (let i = 6; i <= num; i++) {
    // 9로 가려면? 6,7,8,9
    // 3의 배수, 5의 배수 찾기
    if (i % 3 === 0) {
      dp[i] = dp[i - 3] + 1;
    }
    if (i % 5 === 0) {
      dp[i] = dp[i - 5] + 1;
    }
    // 9일때 출력됨, 11을 어떻게 할 것인가?
    // console.log(dp[8]);
    // dp[8] 은 항상 -1이다.
    // if (dp[i - 3]) {
    //   dp[i] = dp[i - 3] + 1;
    // } else if (dp[i - 5]) {
    //   dp[i] = dp[i - 5] + 1;
    // }
    // if (dp[i - 5] && i % 3 == 0) {
    //   dp[i] = dp[i - 5] + 1;
    // }

    // 12 에러 해결하기
    // 둘 다 값이 있는 경우 더 작은 값으로 할당
    if (dp[i - 3] > 0 && dp[i - 5] > 0) {
      dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
    }
  }
  return dp[num];
};

console.log(solution(N));
