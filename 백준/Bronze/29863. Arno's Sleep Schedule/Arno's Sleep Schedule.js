// https://www.acmicpc.net/problem/29863

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sleep = +input.shift();
const wakeUp = +input.shift();

console.log(sleep >= 20 && sleep <= 23 ? 24 - sleep + wakeUp : wakeUp - sleep);
