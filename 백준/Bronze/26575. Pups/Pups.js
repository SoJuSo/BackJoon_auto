// https://www.acmicpc.net/problem/26575

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(
    "$" +
      input[i]
        .split(" ")
        .reduce((acc, cur) => acc * parseFloat(cur), 1)
        .toFixed(2)
  );
}
console.log(answer.join("\n"));
