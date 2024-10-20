// https://www.acmicpc.net/problem/1356

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  for (let i = 1; i < num.length; i++) {
    if (
      num.slice(0, i).reduce((acc, cur) => acc * +cur, 1) ===
      num.slice(i, num.length).reduce((acc, cur) => acc * +cur, 1)
    ) {
      return "YES";
    }
  }
  return "NO";
};

console.log(sol(input.shift().split("")));
