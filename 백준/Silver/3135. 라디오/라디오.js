// https://www.acmicpc.net/problem/3135

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B] = input.shift().split(" ").map(Number);
const N = +input.shift();

let closest = [999999999999, 0];

for (let i = 0; i < N; i++) {
  if (Math.abs(B - +input[i]) < closest[0]) {
    closest[0] = Math.abs(B - +input[i]);
    closest[1] = i;
  }
}

console.log(Math.min(closest[0] + 1, Math.abs(A - B)));
