// https://www.acmicpc.net/problem/5554

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return Math.floor(sum / 60) + "\n" + (sum % 60);
};

console.log(sol(input.map(Number)));
