// https://www.acmicpc.net/problem/1543

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([text, word]) => {
  // 아이디어
  // 문자열 & 구현
  return text
    .replaceAll(word, "0")
    .split("")
    .filter((val) => val === "0").length;
};

console.log(sol(input));
