// https://www.acmicpc.net/problem/31499

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (n, m) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = (ans * i) % m;
  }
  return ans;
};

console.log(sol(N, M));