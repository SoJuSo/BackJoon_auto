// https://www.acmicpc.net/problem/11047
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, K] = input.shift().split(" ").map(Number);

const sol = (cnt, target, arr) => {
  // 아이디어
  // 구현!
  let answer = 0;

  while (arr.length && target > 0) {
    const cur = +arr.pop();

    // console.log(target / cur);
    if (target / cur >= 1) {
      const val = Math.floor(target / cur);
      target -= cur * val;
      answer += val;
    }
  }

  return answer;
};

console.log(sol(N, K, input));
