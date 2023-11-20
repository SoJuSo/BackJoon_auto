// https://www.acmicpc.net/problem/11656

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const S = input[0];
const answer = [];
for (let i = 0; i < S.length; i++) {
  answer.push(S.slice(i, S.length));
}
answer.sort();
answer.forEach((val) => console.log(val));
