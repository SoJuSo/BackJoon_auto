// https://www.acmicpc.net/problem/1629

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const origin = input[0];
const explode = input[1];
const stack = [];

for (let i = 0; i < origin.length; i++) {
  stack.push(origin[i]);

  if (stack.slice(stack.length - explode.length, stack.length).join("") === explode) {
    for (let j = 0; j < explode.length; j++) {
      stack.pop();
    }
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
