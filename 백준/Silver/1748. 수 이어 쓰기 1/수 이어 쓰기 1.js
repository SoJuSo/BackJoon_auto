// https://www.acmicpc.net/problem/1748

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (target) => {
  // 아이디어
  // 구현
  const numLength = String(target).length;
  let totalDigits = 0;

  for (let i = 1; i < numLength; i++) {
    totalDigits += 9 * Math.pow(10, i - 1) * i;
  }

  totalDigits += (target - Math.pow(10, numLength - 1) + 1) * numLength;

  return totalDigits;
};

console.log(sol(N));
