// https://www.acmicpc.net/problem/14489

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 치킨

const [A, B] = input[0].split(" ").map(Number);
const C = +input[1];

const sol = (a, b, chicken) => {
  if (a + b < chicken * 2) {
    return a + b;
  } else {
    return a + b - 2 * chicken;
  }
};

console.log(sol(A, B, C));