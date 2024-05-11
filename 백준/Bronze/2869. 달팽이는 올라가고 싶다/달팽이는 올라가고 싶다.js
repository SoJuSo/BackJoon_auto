//https://www.acmicpc.net/problem/2869

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const [A, B, V] = input.shift().split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));
