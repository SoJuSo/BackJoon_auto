// https://www.acmicpc.net/problem/27433

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
// 0! 에 대한 처리 해줘야함

let N = Number(input[0]);
let answer = 1;
while (N > 0) {
  answer = answer * N;
  N--;
}

console.log(answer);
