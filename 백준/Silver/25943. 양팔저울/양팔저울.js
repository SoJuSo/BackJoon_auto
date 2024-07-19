// https://www.acmicpc.net/problem/25943

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const sol = (n, arr) => {
  let left = arr[0],
    right = arr[1];
  for (let i = 2; i < n; i++) {
    if (left === right) {
      left += arr[i];
    } else {
      if (left > right) {
        right += arr[i];
      } else {
        left += arr[i];
      }
    }
  }
  if (left === right) return 0;

  const wei = [1, 2, 5, 10, 20, 50, 100];
  let cnt = 0;

  let diff = Math.abs(left - right);
  let cur = wei.length - 1;

  while (diff > 0) {
    if (wei[cur] <= diff) {
      diff -= wei[cur];
      cnt++;
    } else {
      cur--;
    }
  }

  return cnt;
};

console.log(sol(N, list));
