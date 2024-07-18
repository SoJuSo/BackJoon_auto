// https://www.acmicpc.net/problem/15729

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const sol = (n, arr) => {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      cnt++;
      arr[i + 1] === 1 ? (arr[i + 1] = 0) : (arr[i + 1] = 1);
      arr[i + 2] === 1 ? (arr[i + 2] = 0) : (arr[i + 2] = 1);
    }
  }
  return cnt;
};

console.log(sol(N, list));