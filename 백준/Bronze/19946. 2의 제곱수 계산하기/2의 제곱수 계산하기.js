// https://www.acmicpc.net/problem/19946

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = BigInt(input.shift());

const sol = (n) => {
  let k = 64n;

  while (n % 2n == 0n) {
    n /= 2n;
    k -= 1n;
  }

  return k.toString();
};

console.log(sol(N));
