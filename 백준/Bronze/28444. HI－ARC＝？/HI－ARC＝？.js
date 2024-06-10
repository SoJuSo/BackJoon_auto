// https://www.acmicpc.net/problem/28444

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [H, I, A, R, C] = input[0].split(" ").map(Number);
console.log(H * I - A * R * C);