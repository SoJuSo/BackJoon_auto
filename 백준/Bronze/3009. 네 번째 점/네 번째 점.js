// https://www.acmicpc.net/problem/3009

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (list) => {
  // 아이디어
  // 구현
  const left = {},
    right = {};
  list.forEach((val) => {
    const cur = val.split(" ");
    if (left[cur[0]] === undefined) {
      left[cur[0]] = 1;
    } else {
      left[cur[0]]++;
    }
    if (right[cur[1]] === undefined) {
      right[cur[1]] = 1;
    } else {
      right[cur[1]]++;
    }
  });
  const answer = [];
  Object.entries(left).forEach((val) => {
    if (val[1] === 1) {
      answer.push(val[0]);
    }
  });
  Object.entries(right).forEach((val) => {
    if (val[1] === 1) {
      answer.push(val[0]);
    }
  });
  return answer.join(" ");
};

console.log(sol(input));
