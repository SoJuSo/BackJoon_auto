// https://www.acmicpc.net/problem/10101

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  const [A, B, C] = list.map((v) => +v);

  if (A === 60 && B === 60 && C === 60) {
    return "Equilateral";
  } else if (A + B + C === 180) {
    if (A === B || B === C || A === C) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }
  return "Error";
};

console.log(sol(input));
