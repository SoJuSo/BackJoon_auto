// https://www.acmicpc.net/problem/31867

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const K = input.shift();

let odd = 0,
  even = 0;
for (let i = 0; i < N; i++) {
  if (K[i] % 2 === 0) {
    even++;
  } else if (K[i] == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(odd === even ? -1 : odd > even ? 1 : 0);