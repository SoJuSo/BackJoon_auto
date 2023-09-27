// https://www.acmicpc.net/problem/29719

let fs = require("fs");
// let input = fs.readFileSync("e.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

const length = input[0];
input.shift();
const arr = input;

for (let i = 0; i < length; i++) {
  //   console.log(arr[i].split(""));
  const stack = [];
  arr[i].split("").map((val) => {
    stack.push(val);
    if (stack[stack.length - 2] == "(" && stack[stack.length - 1] == ")") {
      stack.pop();
      stack.pop();
    }
  });
  //   console.log(stack);
  if (stack.length == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
