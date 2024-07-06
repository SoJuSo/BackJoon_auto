// https://www.acmicpc.net/problem/9884

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, m] = input.shift().split(" ").map(Number);

const sol = (num1, num2) => {
  return num2 ? sol(num2, num1 % num2) : num1;
};

console.log(sol(n, m));
