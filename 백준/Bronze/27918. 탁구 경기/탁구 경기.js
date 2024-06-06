//https://www.acmicpc.net/problem/27918

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

input.shift();

let x = 0,
  y = 0;

input.forEach((val) => {
  Math.abs(x - y) < 2 ? (val == "D" ? x++ : y++) : null;
});

console.log(`${x}:${y}`);
