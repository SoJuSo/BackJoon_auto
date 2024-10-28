// https://www.acmicpc.net/problem/28431

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 아이디어
  // 구현
  const map = {};
  arr.forEach((val) => {
    map[val] = (map[val] || 0) + 1;
  });

  for (const [key, value] of Object.entries(map)) {
    if (value % 2 === 1) {
      return Number(key);
    }
  }
};

console.log(sol(input.map(Number)));
