// https://www.acmicpc.net/problem/22193

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log((BigInt(input[1]) * BigInt(input[2])).toString());
