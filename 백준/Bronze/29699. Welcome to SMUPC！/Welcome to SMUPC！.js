// https://www.acmicpc.net/problem/29699

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();

const text = "WelcomeToSMUPC";

console.log(text[(n - 1) % text.length]);
