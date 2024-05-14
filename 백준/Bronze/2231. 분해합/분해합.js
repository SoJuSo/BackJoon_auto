//https://www.acmicpc.net/problem/2231

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());
let result = 0;

for (let i = Math.round(N / 2); i <= N; i++) {
  const [cur, curSum] = [
    i,
    i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0),
  ];

  if (cur + curSum === N) {
    result = cur;
    break;
  }
}

console.log(result);
