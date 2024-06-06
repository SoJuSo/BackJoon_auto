//https://www.acmicpc.net/problem/8437

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const total = BigInt(input[0]);
const diff = BigInt(input[1]);

console.log(((total + diff) / 2n).toString());
console.log(((total - diff) / 2n).toString());
