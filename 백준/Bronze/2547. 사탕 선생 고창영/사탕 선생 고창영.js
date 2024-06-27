// https://www.acmicpc.net/problem/2547

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const TC = +input.shift();
for (let i = 0; i < TC; i++) {
  input.shift();
  const N = +input.shift();
  const sum = input.splice(0, N).reduce((a, c) => BigInt(a) + BigInt(c) - BigInt(N), 0n);
  sum % BigInt(N) === 0n ? console.log("YES") : console.log("NO");
}
