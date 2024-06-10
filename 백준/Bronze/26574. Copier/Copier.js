// https://www.acmicpc.net/problem/26574

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = Number(input.shift());
const answer = [];
for (let i = 0; i < TC; i++) {
  answer.push(`${input[i]} ${input[i]}`);
}
console.log(answer.join("\n"));