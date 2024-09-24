// https://www.acmicpc.net/problem/10025

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K] = input.shift().split(" ").map(Number);

const sol = (pcs, range, arr) => {
  // 아이디어
  // 슬라이딩 윈도우로 해서
  // 각각 최대값 저장하고 비교해보자
  // 메모리가 적기에 최댓값 갱신 형태로 진행한다.
  let answer = -1;

  let maxRange = -1;
  arr.forEach((val) => {
    maxRange = Math.max(maxRange, val[1]);
  });

  const ice = Array(maxRange).fill(0);

  arr.forEach((val) => {
    ice[val[1]] = val[0];
  });

  // console.log(ice);
  // console.log(ice.slice(0, K * 2 + 1));
  let curr = ice.slice(0, K * 2 + 1).reduce((acc, cur) => acc + cur, 0);
  answer = Math.max(answer, curr);

  for (let i = K + 1; i <= maxRange - K; i++) {
    // console.log(ice[i - K - 1], ice[i + K]);
    // console.log(i, curr);
    curr = curr - ice[i - K - 1] + ice[i + K];

    answer = Math.max(answer, curr);
  }

  return answer;
};

console.log(
  sol(
    N,
    K,
    input.map((v) => v.split(" ").map(Number))
  )
);
