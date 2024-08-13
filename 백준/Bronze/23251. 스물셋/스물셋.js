// https://www.acmicpc.net/problem/23251

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  const answer = [];
  arr.forEach((val) => answer.push(23 * val));

  return answer.join("\n");
};

console.log(sol(N, input.map(Number)));
