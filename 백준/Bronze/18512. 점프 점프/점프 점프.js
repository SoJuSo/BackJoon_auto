// https://www.acmicpc.net/problem/18512

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [X, Y, P1, P2] = input.shift().split(" ").map(Number);

const sol = (x, y, p1, p2) => {
  let answer = -1;
  let cnt = 0;
  while (cnt < 100000) {
    if (p1 < p2) {
      p1 += x;
    } else if (p1 > p2) {
      p2 += y;
    } else {
      answer = p1;
      break;
    }
    cnt++;
  }
  return answer;
};

console.log(sol(X, Y, P1, P2));
