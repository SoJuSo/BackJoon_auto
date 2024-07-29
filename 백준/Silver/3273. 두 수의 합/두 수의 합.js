// https://www.acmicpc.net/problem/3273

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);
const X = +input.shift();

const sol = (n, arr, x) => {
  let start = 0,
    end = n - 1;

  let cnt = 0;

  while (start < end) {
    if (arr[start] + arr[end] === x) {
      cnt++;
      start++;
      end--;
    } else if (arr[start] + arr[end] > x) {
      end--;
    } else {
      start++;
    }
  }

  return cnt;
};

console.log(
  sol(
    N,
    list.sort((a, b) => a - b),
    X
  )
);
