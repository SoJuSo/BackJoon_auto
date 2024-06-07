//https://www.acmicpc.net/problem/1225

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B] = input[0].split(" ");

let answer = 0;
for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    answer += Number(A[i]) * Number(B[j]);
  }
}
console.log(answer);
