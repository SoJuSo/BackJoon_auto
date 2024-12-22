// https://www.acmicpc.net/problem/21866

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  // 구현
  const table = [100, 100, 200, 200, 300, 300, 400, 400, 500];
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > table[i]) {
      return "hacker";
    } else {
      sum += list[i];
    }
  }
  return sum >= 100 ? "draw" : "none";
};

console.log(sol(input.shift().split(" ").map(Number)));
