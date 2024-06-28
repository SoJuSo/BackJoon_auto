// https://www.acmicpc.net/problem/17103

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.map((v) => +v);

const isPrime = (num) => {
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
};

const primeList = isPrime(Math.max(...list));

const answer = [];

list.forEach((val) => {
  let cnt = 0;
  for (let i = 2; i <= val / 2; i++) {
    if (primeList[i] && primeList[val - i]) {
      cnt++;
    }
  }
  answer.push(cnt);
});

console.log(answer.join("\n"));
