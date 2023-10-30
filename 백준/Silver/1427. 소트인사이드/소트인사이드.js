// https://www.acmicpc.net/problem/1427

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const N = Number(input[0]);
const answer = Number(
  String(N)
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
console.log(answer);
