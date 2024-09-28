// https://www.acmicpc.net/problem/5543

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([상, 중, 하, 콜, 사]) => {
  // 아이디어
  // 이중 포문?
  const arr = [상 + 콜, 상 + 사, 중 + 콜, 중 + 사, 하 + 콜, 하 + 사];
  return Math.min(...arr) - 50;
};

console.log(sol(input.map(Number)));
