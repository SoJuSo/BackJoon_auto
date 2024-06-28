// https://www.acmicpc.net/problem/1268

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();
const list = input.map((val) => val.split(" ").map((v) => +v));

const answer = Array.from({ length: n }, () => Array(n).fill(0));

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (list[j][i] === list[k][i]) {
        answer[k][j] = 1;
        answer[j][k] = 1;
      }
    }
  }
}

let cnt = [];
for (let arr of answer) {
  cnt.push(arr.reduce((acc, val) => acc + val, 0));
}

console.log(cnt.indexOf(Math.max(...cnt)) + 1);