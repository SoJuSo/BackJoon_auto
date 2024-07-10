// https://www.acmicpc.net/problem/2110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, c] = input.shift().split(" ").map(Number);

const houses = input.map(Number).sort((a, b) => a - b);

const sol = (N, C, arr) => {
  let start = 1;
  let end = arr[N - 1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let count = 1;
    let prev = arr[0];
    for (const cur of arr) {
      if (cur - prev < mid) continue;
      prev = cur;
      count += 1;
    }

    if (count < C) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
};

console.log(sol(n, c, houses));
