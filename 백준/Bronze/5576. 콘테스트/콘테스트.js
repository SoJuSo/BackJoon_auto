// https://www.acmicpc.net/problem/5576

let fs = require("fs");
// let input = fs.readFileSync("e.txt").toString().split("\r\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

let W = [];
let K = [];
for (let i = 0; i < 10; i++) {
  W.push(Number(input[i]));
}

for (let i = 10; i < 20; i++) {
  K.push(Number(input[i]));
}

W.sort((a, b) => b - a);
K.sort((a, b) => b - a);

console.log(W[0] + W[1] + W[2] + " " + (K[0] + K[1] + K[2]));
