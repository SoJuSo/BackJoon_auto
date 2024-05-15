//https://www.acmicpc.net/problem/10814

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = Number(input.shift());
input.sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]));

console.log(input.join("\n"));
