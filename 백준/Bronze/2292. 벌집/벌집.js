// https://www.acmicpc.net/problem/2292

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const T = +input.shift();

const sol = (N) => {
  if (N === 1) return 1;
  if (N <= 7) return 2;

  let cnt = 1,
    num = 1;

  while (N > num) {
    num += 6 * cnt;
    cnt += 1;
  }

  return cnt;
};

console.log(sol(T));