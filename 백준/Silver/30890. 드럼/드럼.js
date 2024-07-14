// https://www.acmicpc.net/problem/30890

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 1초
// 메모리 많음

const [X, Y] = input.shift().split(" ").map(Number); // x = 왼손 연주 횟수, y = 오른손 연주 횟수

const sol = (x, y) => {
  let answer = "";
  for (let i = 1; i <= x * y; i++) {
    if (i % x === 0 && i % y === 0) {
      answer += "3";
    } else if (i % x === 0) {
      answer += "2";
    } else if (i % y === 0) {
      answer += "1";
    }
  }
  return answer;
};

console.log(sol(X, Y));
