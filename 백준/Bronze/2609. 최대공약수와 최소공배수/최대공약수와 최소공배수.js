//https://www.acmicpc.net/problem/2609

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [A, B] = input.shift().split(" ").map(Number);

let gcd = 0;
let lcp = 0;

for (let i = A > B ? A : B; i >= 1; i--) {
  if (A % i === 0 && B % i === 0) {
    gcd = i;
    lcp = (A * B) / gcd;
    break;
  }
}

console.log(gcd);
console.log(lcp);
