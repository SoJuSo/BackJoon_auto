// https://www.acmicpc.net/problem/26082

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const binary = input.shift().split(" ").map(Number).join("");
console.log(binary.includes("9") ? "F" : "S");
