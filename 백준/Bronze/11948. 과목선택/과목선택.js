// https://www.acmicpc.net/problem/11948

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const fe = arr.splice(0, 4);
  fe.sort((a, b) => b - a).pop();
  arr.sort((a, b) => b - a).pop();

  return fe.reduce((acc, cur) => acc + cur, 0) + arr[0];
};

console.log(sol(input.map(Number)));
