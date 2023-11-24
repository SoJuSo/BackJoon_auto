// https://www.acmicpc.net/problem/11478

let fs = require("fs");
// let input = fs.readFileSync("0_example.txt").toString().split("\n"); //vscode
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); //백준

// console.log(input);
const S = input[0];
// console.log(S);
const str = new Set();

for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    str.add(S.substring(i, j + 1));
  }
  //   console.log(str);
}

console.log(str.size);
