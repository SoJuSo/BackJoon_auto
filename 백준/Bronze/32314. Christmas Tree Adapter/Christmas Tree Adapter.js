// https://www.acmicpc.net/problem/32314

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const [W, V] = input.shift().split(" ").map(Number);

const sol = (pcs, watt, volt) => {
  // 아이디어
  // 구현
  return watt >= pcs * volt ? 1 : 0;
};

console.log(sol(N, W, V));
