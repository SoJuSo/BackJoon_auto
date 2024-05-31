//https://www.acmicpc.net/problem/2440

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

let sum = 0;
for (let i = 0; i < 5; i++) {
  const num = Number(input[i]);
  num < 40 ? (sum += 40) : (sum += Number(input[i]));
}
console.log(sum / 5);
