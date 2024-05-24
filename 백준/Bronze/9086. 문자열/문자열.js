//https://www.acmicpc.net/problem/9086

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

input.shift();

console.log(
  input.reduce((acc, cur) => {
    acc += cur[0] + cur[cur.length - 1] + "\n";
    return acc;
  }, "")
);
