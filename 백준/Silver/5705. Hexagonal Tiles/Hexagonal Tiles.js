//https://www.acmicpc.net/problem/5705

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

let n = parseInt(input.shift());

while (n !== 0) {
  let prev = 0;
  let current = 1;

  // Fibonacci 수열 계산
  for (let i = 0; i < n; i++) {
    let temp = current;
    current = prev + current;
    prev = temp;
  }

  // 결과 출력
  console.log(current);
  n = parseInt(input.shift());
}
