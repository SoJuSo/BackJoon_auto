//https://www.acmicpc.net/problem/1654

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [_, N] = input.shift().split(" ").map(Number);
const lanList = input.map(Number);

const sol = (cnt, list) => {
  let start = 1;
  let end = Math.max(...list);
  let mid;

  while (start <= end) {
    let answer = 0;
    mid = parseInt((start + end) / 2);

    for (const len of list) {
      answer += Math.floor(len / mid);
    }

    if (answer >= cnt) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

console.log(sol(N, lanList));
