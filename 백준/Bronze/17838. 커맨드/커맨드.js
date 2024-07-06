// https://www.acmicpc.net/problem/17838

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const n = +input.shift();
const str = input;

const sol = (TC, arr) => {
  const answer = [];
  for (let i = 0; i < TC; i++) {
    const cur = arr[i];
    if (cur.length === 7) {
      if (
        cur[0] === cur[1] &&
        cur[1] === cur[4] &&
        cur[2] === cur[3] &&
        cur[3] === cur[5] &&
        cur[5] === cur[6] &&
        cur[1] !== cur[2]
      ) {
        answer.push(1);
      } else {
        answer.push(0);
      }
    } else {
      answer.push(0);
    }
  }

  return answer.join("\n");
};

console.log(sol(n, str));
