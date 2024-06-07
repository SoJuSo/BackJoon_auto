//https://www.acmicpc.net/problem/12789

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());
const 번호표 = input.shift().split(" ").map(Number);

let num = 1;
const stack = [];

for (let i = 0; i < N; i++) {
  stack.push(번호표[i]);
  while (stack.length > 0 && stack[stack.length - 1] === num) {
    stack.pop();
    num++;
  }
}

if (stack.length > 0) {
  console.log("Sad");
} else {
  console.log("Nice");
}
