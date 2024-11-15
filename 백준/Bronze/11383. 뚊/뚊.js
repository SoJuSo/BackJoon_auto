// https://www.acmicpc.net/problem/11383

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);

const sol = (f, s, list) => {
  // 아이디어
  for (let i = 0; i < list.length / 2; i++) {
    if (
      list[i]
        .split("")
        .map((v) => v.repeat(2))
        .join("") !== list[i + f]
    ) {
      return "Not Eyfa";
    }
  }
  return "Eyfa";
};

console.log(sol(N, M, input));
