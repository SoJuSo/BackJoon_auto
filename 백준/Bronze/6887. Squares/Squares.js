// https://www.acmicpc.net/problem/6887

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  const num = +list.shift();
  return `The largest square has side length ${Math.floor(Math.sqrt(num, 2))}.`;
};

console.log(sol(input));
