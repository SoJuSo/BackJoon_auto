// https://www.acmicpc.net/problem/4470

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, list) => {
  return list.reduce((acc, cur, i) => {
    if (i === n - 1) {
      return acc + `${i + 1}. ${cur}`;
    } else {
      return acc + `${i + 1}. ${cur}\n`;
    }
  }, "");
};

console.log(sol(N, input));
