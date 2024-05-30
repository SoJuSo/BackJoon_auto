//https://www.acmicpc.net/problem/7891

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = Number(input[0]);
const answer = [];

for (let i = 1; i <= TC; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  answer.push(x + y);
}

console.log(answer.join("\n"));
