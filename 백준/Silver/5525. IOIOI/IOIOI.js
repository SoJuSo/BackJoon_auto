//https://www.acmicpc.net/problem/5525

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];

const sol = (num, len, str) => {
  const PN = "IOI" + "OI".repeat(num - 1);
  let cnt = 0;
  for (let i = 0; i < len - PN.length + 1; i++) {
    if (str.slice(i, i + PN.length) === PN) {
      cnt++;
    }
  }
  return cnt;
};

console.log(sol(N, M, S));
