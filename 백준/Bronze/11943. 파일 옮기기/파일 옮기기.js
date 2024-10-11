// https://www.acmicpc.net/problem/11943

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([A, B, C, D]) => {
  // 아이디어
  return Math.min(A + D, B + C);
};

console.log(
  sol(
    input
      .flat()
      .map((v) => v.split(" ").map((i) => +i))
      .flat()
  )
);
