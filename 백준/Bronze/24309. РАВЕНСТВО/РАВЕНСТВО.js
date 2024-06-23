// https://www.acmicpc.net/problem/24309

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const a = BigInt(input.shift());
const b = BigInt(input.shift());
const c = BigInt(input.shift());

console.log(String((b - c) / a));
