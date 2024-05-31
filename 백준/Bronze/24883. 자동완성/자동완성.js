//https://www.acmicpc.net/problem/24883

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(input[0] === "N" || input[0] === "n" ? "Naver D2" : "Naver Whale");
