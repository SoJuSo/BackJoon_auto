// https://www.acmicpc.net/problem/11966

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  while (num !== 1n) {
    if (num % 2n === 1n) {
      return 0;
    }
    num /= 2n;
  }

  return 1;
};

console.log(sol(BigInt(input[0])));
