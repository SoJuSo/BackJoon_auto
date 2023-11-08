// https://www.acmicpc.net/problem/10828

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const stack = [];
const answer = [];
const N = Number(input.shift());

function solution(inputString) {
  switch (inputString) {
    case "top":
      stack.length === 0
        ? answer.push(-1)
        : answer.push(stack[stack.length - 1]);
      break;
    case "pop":
      stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      stack.length === 0 ? answer.push(1) : answer.push(0);
      break;
    default:
      if (inputString.includes("push")) {
        const inputNumber = inputString.split(" ")[1];
        stack.push(inputNumber);
      }
      break;
  }
}

for (let i = 0; i < N; i++) {
  solution(input[i]);
}

console.log(answer.join("\n"));
