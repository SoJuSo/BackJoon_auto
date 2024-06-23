// https://www.acmicpc.net/problem/30664

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const answer = [];
for (let i = 0; i < input.length - 1; i++) {
  answer.push(BigInt(input[i]) % 42n === 0n ? "PREMIADO" : "TENTE NOVAMENTE");
}
console.log(answer.join("\n"));
