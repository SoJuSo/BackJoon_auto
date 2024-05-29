//https://www.acmicpc.net/problem/5341

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const factorial = (n) => {
  if (n === 1) return 1;
  return n + factorial(n - 1);
};

const answer = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] == 0) break;
  answer.push(factorial(Number(input[i])));
}
console.log(answer.join("\n"));
