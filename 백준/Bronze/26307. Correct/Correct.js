// https://www.acmicpc.net/problem/26307

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [HH, MM] = input[0].split(" ").map(Number);
console.log(Math.abs(9 - HH) * 60 + MM);