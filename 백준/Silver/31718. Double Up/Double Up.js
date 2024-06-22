// https://www.acmicpc.net/problem/31718

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const limit = Math.max(...list);

const arr = {};

for (let i = 0; i < list.length; i++) {
  for (let j = list[i]; j <= limit * 2; j *= 2) {
    if (arr[j] === undefined) {
      arr[j] = 1;
    } else {
      arr[j]++;
    }
  }
}

console.log(Object.entries(arr).sort((a, b) => b[1] - a[1])[0][1]);
