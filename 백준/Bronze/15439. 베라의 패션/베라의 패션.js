// https://www.acmicpc.net/submit/15439

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const sol = (num) => {
  return num * (num - 1);
};

console.log(sol(input[0]));
