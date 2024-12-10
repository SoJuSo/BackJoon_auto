// https://www.acmicpc.net/problem/3058

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  // 구현
  const answer = [];
  for (let i = 0; i < pcs; i++) {
    const cur = list[i].split(" ").map(Number);
    let min = Infinity;
    let cnt = 0;
    cur.forEach((val) => {
      if (val % 2 === 0) {
        min = Math.min(val, min);
        cnt += val;
      }
    });
    answer.push(`${cnt} ${min}`);
  }
  return answer.join("\n");
};

console.log(sol(N, input));
