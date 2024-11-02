// https://www.acmicpc.net/problem/10768

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.map(Number);

const sol = (month, day) => {
  // 아이디어
  // 구현

  if (month === 2 && day === 18) return "Special";
  else if (month < 2 || (month === 2 && day < 18)) return "Before";
  else return "After";
};

console.log(sol(N, M));
