// https://www.acmicpc.net/problem/20310

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  let one = 0,
    zero = 0;

  str.split("").forEach((val) => {
    val == 1 ? one++ : zero++;
  });

  return "0".repeat(zero / 2) + "1".repeat(one / 2);
};

console.log(sol(input.shift()));
