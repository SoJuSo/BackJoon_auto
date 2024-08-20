// https://www.acmicpc.net/problem/10773

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const stack = [];
  arr.forEach((val) => {
    if (val == 0) {
      stack.pop();
    } else {
      stack.push(+val);
    }
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
};

console.log(sol(N, input));
