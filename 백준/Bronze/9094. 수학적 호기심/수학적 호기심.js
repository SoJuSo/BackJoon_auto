// https://www.acmicpc.net/problem/9094

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (tc, arr) => {
  const answer = [];
  arr.forEach((val) => {
    const [n, m] = val.split(" ").map(Number);
    let cnt = 0;

    for (let a = 1; a < n - 1; a++) {
      for (let b = a + 1; b < n; b++) {
        if (Number.isInteger((a ** 2 + b ** 2 + m) / (a * b))) cnt++;
      }
    }

    answer.push(cnt);
  });

  return answer.join("\n");
};

console.log(sol(N, input));
