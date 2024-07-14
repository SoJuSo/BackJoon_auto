// https://www.acmicpc.net/problem/20499

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

//「진짜」문제

const list = input[0].split("/").map(Number);

const sol = (arr) => {
  if (arr[1] === 0 || arr[0] + arr[2] < arr[1]) {
    return "hasu";
  }
  return "gosu";
};

console.log(sol(list));
