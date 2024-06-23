// https://www.acmicpc.net/problem/24568

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const R = +input.shift();
const S = +input.shift();

console.log(R * 8 + S * 3 - 28);
