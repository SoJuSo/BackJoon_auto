// https://www.acmicpc.net/problem/24417

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (target) => {
  // 아이디어
  // 구현
  // 인데 최적화를 곁들인
  // dp를 기억하면 안됌
  let dp_cnt = 0;

  let prev1 = 1;
  let prev2 = 1;
  let current = 1;

  for (let i = 3; i <= target; i++) {
    dp_cnt++;
    current = (prev1 + prev2) % 1000000007;
    prev1 = prev2;
    prev2 = current;
  }

  return `${current} ${dp_cnt % 1000000007}`;
};

console.log(sol(N));
