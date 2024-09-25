// https://www.acmicpc.net/problem/16435

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, L] = input.shift().split(" ").map(Number);

const sol = (pcs, len, arr) => {
  // 아이디어
  // 단순 구?현
  arr.forEach((val) => {
    if (val <= len) {
      len++;
    }
  });

  return len;
};

console.log(
  sol(
    N,
    L,
    input
      .shift()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  )
);
