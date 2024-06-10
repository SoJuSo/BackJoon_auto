// https://www.acmicpc.net/problem/27434

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const factorial = (a, num) => {
  if (a < num) {
    const mid = ~~((a + num) / 2);
    return BigInt(factorial(a, mid)) * BigInt(factorial(mid + 1, num));
  }
  return a;
};

console.log(factorial(1, +input[0]).toString());