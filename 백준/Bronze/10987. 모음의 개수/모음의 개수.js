// https://www.acmicpc.net/problem/10987

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  const obj = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  return str.split("").reduce((acc, cur) => {
    if (obj[cur]) {
      return (acc = acc + 1);
    } else {
      return acc;
    }
  }, 0);
};

console.log(sol(input[0]));