// https://www.acmicpc.net/problem/21734

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = input.shift();

const sol = (str) => {
  let answer = "";
  str.split("").forEach((val, i) => {
    const cur = val
      .charCodeAt()
      .toString()
      .split("")
      .reduce((acc, cur) => acc + +cur, 0);
    answer += val.repeat(cur) + (i === str.length - 1 ? "" : "\n");
  });
  return answer;
};

console.log(sol(N));
