// https://www.acmicpc.net/problem/15965

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const isPrime = (n) => {
  const arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.map((v, i) => (v ? i : 0)).filter((e) => e);
};

console.log(isPrime(7368788)[+input.shift() - 1]);
