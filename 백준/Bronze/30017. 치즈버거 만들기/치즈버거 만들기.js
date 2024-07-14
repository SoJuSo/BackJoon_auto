// https://www.acmicpc.net/problem/30017

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

//「진짜」문제

const [A, B] = input[0].split(" ").map(Number);

const sol = (patty, cheese) => {
  if (patty <= cheese) {
    return patty + patty - 1;
  } else {
    return cheese + cheese + 1;
  }
};

console.log(sol(A, B));
