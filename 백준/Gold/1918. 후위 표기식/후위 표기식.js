// https://www.acmicpc.net/problem/1918

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 스택 구현

const operation = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "(": 0,
};

const sol = (s) => {
  let str = "";
  const stack = [];
  s.split("").forEach((v) => {
    if (v === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        str += stack.pop();
      }
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      }
    } else if (v === "(") {
      stack.push(v);
    } else if (operation[v] !== undefined) {
      while (stack.length > 0 && operation[stack[stack.length - 1]] >= operation[v]) {
        str += stack.pop();
      }
      stack.push(v);
    } else {
      str += v;
    }
  });
  while (stack.length > 0) {
    str += stack.pop();
  }
  return str;
};

console.log(sol(input[0]));