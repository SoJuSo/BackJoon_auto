//https://www.acmicpc.net/problem/6840

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(input.sort((a, b) => Number(a) - Number(b))[1]);
