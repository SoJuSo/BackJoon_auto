// https://www.acmicpc.net/problem/6219
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const isPrime = (num) => {
  const arr = new Array(num + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
};

const sol = ([a, b, d]) => {
  // 아이디어
  // 구현?
  // 에라토스테네스의 체
  const primeList = isPrime(Math.max(a, b));

  let cnt = 0;
  for (let i = a; i <= b; i++) {
    if (primeList[i]) {
      if (String(i).includes(d)) cnt++;
    }
  }

  return cnt;
};

console.log(sol(input.shift().split(" ").map(Number)));
