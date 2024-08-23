// https://www.acmicpc.net/problem/25705

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (arr) => {
  // 시공간복잡도 상관없이 단순구현
  const N = +arr.shift();
  const 돌림판 = arr.shift();
  const M = +arr.shift();
  const target = arr.shift();

  let answer = "";
  let current = 0;
  let targetLoc = 0;

  let cnt = 0;

  while (target != answer) {
    if (돌림판[current] === target[targetLoc]) {
      answer += 돌림판[current];
      targetLoc++;
    } else if (!돌림판.includes(target[targetLoc])) {
      cnt = -1;
      break;
    }

    if (current === 돌림판.length - 1) {
      current = 0;
    } else {
      current++;
    }

    cnt++;
  }

  return cnt;
};

console.log(sol(input));
