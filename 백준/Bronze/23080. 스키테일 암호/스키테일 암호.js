// https://www.acmicpc.net/problem/23080

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const str = input.shift();

const sol = (num, list) => {
  let ans = "";
  list.split("").forEach((val, i) => {
    if (i % num === 0) ans += val;
  });
  return ans;
};

console.log(sol(N, str));
