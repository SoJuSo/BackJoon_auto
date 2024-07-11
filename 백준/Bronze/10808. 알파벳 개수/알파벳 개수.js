// https://www.acmicpc.net/problem/10808

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const str = input.shift();
const sol = (s) => {
  let answer = Array(26).fill(0);
  s.split("").forEach((e) => {
    answer[e.toUpperCase().charCodeAt() - 65]++;
  });
  return answer.join(" ");
};

console.log(sol(str));
