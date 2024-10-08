// https://www.acmicpc.net/problem/19944

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([N, M]) => {
  // 아이디어
  // 9현
  return M === 1 || M === 2 ? "NEWBIE!" : M <= N && M > 2 ? "OLDBIE!" : "TLE!";
};

console.log(sol(input.shift().split(" ").map(Number)));
