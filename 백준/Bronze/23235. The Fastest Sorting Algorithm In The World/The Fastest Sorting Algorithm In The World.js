// https://www.acmicpc.net/problem/23235

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

let i = 1;
const answer = [];

while (input.length > 1) {
  answer.push(`Case ${i}: Sorting... done!`);
  input.pop();
  i++;
}

console.log(answer.join("\n"));
