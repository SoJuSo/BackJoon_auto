//https://www.acmicpc.net/problem/3733

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
for (const token of input) {
  const [N, S] = token.split(" ").map(Number);
  answer.push(Math.floor(S / (N + 1)));
}
console.log(answer.join("\n"));
