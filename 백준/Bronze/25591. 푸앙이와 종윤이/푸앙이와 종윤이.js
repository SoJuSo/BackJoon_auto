//https://www.acmicpc.net/problem/25591

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);

const [a, b] = [100 - N, 100 - M];
const [c, d] = [100 - (a + b), a * b];
const [q, r] = [Math.floor(d / 100), d % 100];

console.log(a, b, c, d, q, r);
console.log(String(c + q).slice(0, 2), r);
