// https://www.acmicpc.net/problem/1966

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  // 아이디어
  // 시뮬레이션 돌린다. 2중포문
  const answer = [];
  for (let tc = 0; tc < num; tc++) {
    let [len, target] = arr.shift().split(" ").map(Number);
    const cur = arr.shift().split(" ").map(Number);
    const idx = Array.from({ length: len }, (_, i) => i);
    if (len === 1) {
      answer.push(1);
      continue;
    }

    let cnt = 0;

    while (cur.length) {
      const max = Math.max(...cur);
      if (cur[0] === max) {
        cnt++;
        const temp = idx.shift();
        if (temp === target) {
          answer.push(cnt);
          break;
        }
        cur.shift();
      } else {
        cur.push(cur.shift());
        idx.push(idx.shift());
      }
    }
  }

  return answer.join("\n");
};

console.log(sol(N, input));
