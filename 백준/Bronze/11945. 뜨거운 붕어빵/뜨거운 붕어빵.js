// https://www.acmicpc.net/problem/11945

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (row, col, list) => {
  // 아이디어
  return list.reduce((acc, cur, idx) => {
    const reverse = cur.split("").reverse().join("");
    return acc + reverse + (idx === list.length - 1 ? "" : "\n");
  }, "");
};

console.log(sol(N, M, input));
