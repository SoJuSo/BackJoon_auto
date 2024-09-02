// https://www.acmicpc.net/problem/30468

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  const [str, dex, int, luk, N] = arr.split(" ").map(Number);
  return N * 4 - (str + dex + int + luk) < 0 ? 0 : N * 4 - (str + dex + int + luk);
};

console.log(sol(input[0]));
