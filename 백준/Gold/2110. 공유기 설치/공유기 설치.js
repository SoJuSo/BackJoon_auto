// https://www.acmicpc.net/problem/2110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [n, c] = input.shift().split(" ").map(Number);

const houses = input.map(Number).sort((a, b) => a - b);

const sol = (num, count, arr) => {
  let left = 1,
    right = arr[num - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let route = 1;
    let prev = arr[0];

    for (let i = 0; i < num; i++) {
      if (arr[i] - prev >= mid) {
        route++;
        prev = arr[i];
      }
    }

    if (route >= count) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};

console.log(sol(n, c, houses));
