//https://www.acmicpc.net/problem/20492

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const num = +input.shift();
console.log(num * 0.78, num * 0.8 + num * 0.2 * 0.78);
