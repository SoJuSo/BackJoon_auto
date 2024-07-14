// https://www.acmicpc.net/problem/17388

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

//「진짜」문제

const [S, K, H] = input[0].split(" ").map(Number);

const sol = (a, b, c) => {
  if (a + b + c >= 100) {
    return "OK";
  } else {
    if (a < b && a < c) {
      return "Soongsil";
    }
    if (b < a && b < c) {
      return "Korea";
    }
    if (c < a && c < b) {
      return "Hanyang";
    }
  }
};

console.log(sol(S, K, H));
