// https://www.acmicpc.net/problem/10867

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const sol = (pcs, arr) => {
  // 아이디어
  // set으로 중복제거하고 정렬 반환
  return Array.from(new Set(arr))
    .sort((a, b) => a - b)
    .join(" ");
};

console.log(sol(N, list));
