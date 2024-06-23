// https://www.acmicpc.net/problem/28113

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, A, B] = input.shift().split(" ").map(Number);

const sol = () => {
  if (A < B) {
    return `Bus`;
  }
  if (A > B) {
    return `Subway`;
  }
  return `Anything`;
};

console.log(sol());
