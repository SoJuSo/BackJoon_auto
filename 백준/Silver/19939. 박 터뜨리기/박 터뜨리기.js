// https://www.acmicpc.net/problem/19939

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

let [n, k] = input[0].split(" ").map(Number);
let result = 0;
let sum = (k * (k + 1)) / 2;

if (sum > n) result = -1;
else {
  n -= sum;
  if (n % k === 0) result = k - 1;
  else result = k;
}
console.log(result);
