//https://www.acmicpc.net/problem/15727

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const L = Number(input.shift());

console.log(L % 5 === 0 ? Math.floor(L / 5) : Math.floor(L / 5) + 1);
