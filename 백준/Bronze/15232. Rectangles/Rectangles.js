//https://www.acmicpc.net/problem/8871

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const R = Number(input.shift());
const C = Number(input.shift());

const answer = [];
for (let i = 0; i < R; i++) {
  answer.push("*".repeat(C));
}
console.log(answer.join("\n"));
