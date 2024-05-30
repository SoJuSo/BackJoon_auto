//https://www.acmicpc.net/problem/14581

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(`:fan::fan::fan:
:fan::${input[0]}::fan:
:fan::fan::fan:`);
