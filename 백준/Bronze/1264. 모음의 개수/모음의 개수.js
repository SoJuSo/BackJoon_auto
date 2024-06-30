// https://www.acmicpc.net/problem/1264

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const obj = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

const sol = (list) => {
  const answer = [];
  while (1) {
    const cur = list.shift();
    if (cur.length === 1 && cur === "#") break;

    let cnt = 0;
    for (let i = 0; i < cur.length; i++) {
      if (obj[cur[i].toLowerCase()]) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return answer.join("\n");
};

console.log(sol(input));
