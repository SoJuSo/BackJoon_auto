//https://www.acmicpc.net/problem/1271

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(BigInt);
console.log(`${(N / M).toString()}\n${(N % M).toString()}`);
