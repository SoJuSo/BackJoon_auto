// https://www.acmicpc.net/problem/2845

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const area = input
  .shift()
  .split(" ")
  .reduce((a, c) => +a * +c);

const answer = [];
input
  .shift()
  .split(" ")
  .forEach((val) => {
    answer.push(+val - area);
  });
console.log(answer.join("\n"));