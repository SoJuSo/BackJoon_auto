//https://www.acmicpc.net/problem/27219

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();

const obj = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

let answer = 0;
for (const index of input[0]) {
  if (obj[index]) answer++;
}
console.log(answer);
