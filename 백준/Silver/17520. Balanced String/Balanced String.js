// https://www.acmicpc.net/problem/17520

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();

console.log((BigInt(2) ** BigInt(Math.floor((n + 1) / 2)) % 16769023n).toString());
