// https://www.acmicpc.net/problem/31922

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const list = input.shift().split(" ").map(Number);

const sol = (arr) => {
  return arr[0] + arr[2] > arr[1] ? arr[0] + arr[2] : arr[1];
};

console.log(sol(list));
