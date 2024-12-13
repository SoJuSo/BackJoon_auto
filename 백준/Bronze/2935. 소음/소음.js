// https://www.acmicpc.net/problem/2935

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  const A = BigInt(list[0]);
  const sign = list[1];
  const B = BigInt(list[2]);

  return String(sign === "*" ? A * B : A + B);
};

console.log(sol(input));
