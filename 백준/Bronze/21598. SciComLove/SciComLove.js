// https://www.acmicpc.net/problem/21598

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);
const answer = [];
for (let i = 0; i < Number(input[0]); i++) {
  answer.push("SciComLove");
}
console.log(answer.join("\n"));