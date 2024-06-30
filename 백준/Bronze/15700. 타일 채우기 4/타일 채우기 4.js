// https://www.acmicpc.net/problem/15700

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  const [N, M] = list
    .shift()
    .split(" ")
    .map((v) => BigInt(v));

  return ((N * M) / 2n).toString();
};

console.log(sol(input));
