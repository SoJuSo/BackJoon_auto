// https://www.acmicpc.net/problem/2909

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [C, K] = input.shift().split(" ").map(Number);
const sol = (price, num) => {
  const [int, dec] = (price / 10 ** num).toString().split(".");
  return dec === undefined ? int : (+dec[0] >= 5 ? +int + 1 : +int) * 10 ** num;
};

console.log(sol(C, K));
