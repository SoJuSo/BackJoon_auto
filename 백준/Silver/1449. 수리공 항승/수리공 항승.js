// https://www.acmicpc.net/problem/1449

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const [N, L] = input[0].split(" ").map(Number);
const leakArray = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
// console.log(N, L);
// console.log(leakArray);

let answer = 1;

let start = leakArray.shift();

for (const value of leakArray) {
  if (0.5 + value + 0.5 - start > L) {
    answer++;
    start = value;
  }
}

console.log(answer);
