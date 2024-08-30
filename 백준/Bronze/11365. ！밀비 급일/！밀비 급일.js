// https://www.acmicpc.net/problem/11365

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  return arr
    .map((val) => val.split("").reverse().join(""))
    .slice(0, arr.length - 1)
    .join("\n");
};

console.log(sol(input));
