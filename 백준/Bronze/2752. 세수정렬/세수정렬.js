// https://www.acmicpc.net/problem/2752

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const list = input.shift().split(" ").map(Number);

const sol = (arr) => {
  return arr.sort((a, b) => a - b).join(" ");
};

console.log(sol(list));
