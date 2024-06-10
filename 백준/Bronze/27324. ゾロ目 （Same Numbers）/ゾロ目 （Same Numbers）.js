// https://www.acmicpc.net/problem/27324

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(input[0].split("")[0] == input[0].split("")[1] ? 1 : 0);