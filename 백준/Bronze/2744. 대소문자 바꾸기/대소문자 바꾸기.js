//https://www.acmicpc.net/problem/2744

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

console.log(
  input[0].split("").reduce((acc, cur) => {
    cur >= "a" ? (acc += String(cur.toUpperCase())) : (acc += String(cur.toLowerCase()));
    return acc;
  }, "")
);
