//https://www.acmicpc.net/problem/15964

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B] = input.shift().split(" ").map(Number);
console.log((A + B) * (A - B));
