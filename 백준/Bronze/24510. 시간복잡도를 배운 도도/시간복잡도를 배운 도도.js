// https://www.acmicpc.net/problem/24510

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, arr) => {
  // 아이디어
  // 문자열
  let max = 0;
  arr.forEach((val) => {
    let cur = val;
    cur = cur.replaceAll("for", "0");
    cur = cur.replaceAll("while", "0");
    max = Math.max(max, cur.split("").filter((token) => token === "0").length);
  });

  return max;
};

console.log(sol(N, input));
