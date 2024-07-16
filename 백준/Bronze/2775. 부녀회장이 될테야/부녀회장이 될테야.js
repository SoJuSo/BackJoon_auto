// https://www.acmicpc.net/problem/2775

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const T = +input.shift();

const dp = (num) => {
  const arr = Array.from(Array(num + 1), () => Array(num + 1));

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      if (i === 0) {
        arr[i][j] = j + 1;
      } else if (j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 14; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr;
};

const sol = (TC, arr) => {
  const answer = [];
  const table = dp(Math.max(...arr));
  for (let i = 0; i < TC; i++) {
    const k = +arr.shift(); // 층
    const n = +arr.shift(); // 호
    answer.push(table[k][n - 1]);
  }
  return answer.join("\n");
};

console.log(sol(T, input));
