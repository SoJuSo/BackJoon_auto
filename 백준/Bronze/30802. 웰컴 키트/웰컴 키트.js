// https://www.acmicpc.net/problem/30802

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const size = input.shift().split(" ").map(Number);
const [T, P] = input.shift().split(" ").map(Number);

console.log(
  size.reduce((acc, cur) => {
    const need = Math.ceil(cur / T);
    return acc + need;
  }, 0)
);
console.log(Math.floor(N / P) + " " + (N % P));
