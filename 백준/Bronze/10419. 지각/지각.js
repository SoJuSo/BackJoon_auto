// https://www.acmicpc.net/problem/10419

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num, arr) => {
  const answer = [];
  arr.forEach((val) => {
    if (val === 1) {
      answer.push(0);
    } else {
      for (let i = 1; i <= val; i++) {
        if (i + i ** 2 > val) {
          answer.push(i - 1);
          break;
        }
      }
    }
  });
  return answer.join("\n");
};

console.log(
  sol(
    N,
    input.map((v) => +v)
  )
);
