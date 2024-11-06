// https://www.acmicpc.net/problem/31833

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (N, list) => {
  // 아이디어
  // 구현
  return BigInt(list[0].split(" ").join("")) > BigInt(list[1].split(" ").join(""))
    ? BigInt(list[1].split(" ").join("")).toString()
    : BigInt(list[0].split(" ").join("")).toString();
};

console.log(sol(N, input));
