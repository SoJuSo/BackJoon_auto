//https://www.acmicpc.net/problem/2338

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B] = [BigInt(input.shift()), BigInt(input.shift())];

const sol = (a, b) => {
  return (a + b).toString() + "\n" + (a - b).toString() + "\n" + (a * b).toString();
};

console.log(sol(A, B));
