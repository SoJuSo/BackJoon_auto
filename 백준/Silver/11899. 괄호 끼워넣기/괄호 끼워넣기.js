// https://www.acmicpc.net/problem/11899

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const S = input[0].split("");
const answer = [];
S.forEach((value) => {
  answer.push(value);
  if (answer[answer.length - 2] === "(" && answer[answer.length - 1] === ")") {
    answer.pop();
    answer.pop();
  }
});

console.log(answer.length);
