// https://www.acmicpc.net/problem/5717

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
while (1) {
  const [M, F] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  if (M === 0 && F === 0) break;
  answer.push(+M + +F);
}
console.log(answer.join("\n"));