//https://www.acmicpc.net/problem/15829

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

const L = Number(input.shift());
const word = input[0].split("");
let primeNumber = 31n;

let result = 0n;
let pow = BigInt(1);
for (let i = 0; i < L; i++) {
  result += BigInt(BigInt(word[i].charCodeAt() - 96) * pow);
  pow *= primeNumber;
}

const M = 1234567891n;

if (result >= M) result %= M;
console.log(Number(result));
