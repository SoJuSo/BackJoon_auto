// https://www.acmicpc.net/problem/2902

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (text) => {
  return text.split("-").reduce((acc, cur) => acc + cur[0], "");
};

console.log(sol(input.shift()));
