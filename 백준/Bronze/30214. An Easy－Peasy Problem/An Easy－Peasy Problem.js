// https://www.acmicpc.net/problem/30214

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [s1, s2] = input.shift().split(" ").map(Number);

console.log(s1 >= s2 / 2 ? "E" : "H");
