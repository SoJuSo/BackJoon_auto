//https://www.acmicpc.net/problem/2440

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
for (let i = Number(input[0]); i > 0; i--) {
  answer.push("*".repeat(i));
}
console.log(answer.join("\n"));
