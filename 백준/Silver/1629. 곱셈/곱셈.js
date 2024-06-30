// https://www.acmicpc.net/problem/1629

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B, C] = input
  .shift()
  .split(" ")
  .map((v) => BigInt(v));

const moduler = (num1, num2, rest) => {
  if (num2 === 1n) {
    return num1 % rest;
  } else {
    const half = moduler(num1, num2 / 2n, rest) % rest;
    if (num2 % 2n) {
      return (half * half * (num1 % rest)) % rest;
    } else {
      return (half * half) % rest;
    }
  }
};

console.log(moduler(A, B, C).toString());
