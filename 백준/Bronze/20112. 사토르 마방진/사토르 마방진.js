// https://www.acmicpc.net/problem/20112

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n, arr) => {
  let answer = "YES";
  for (let str = 0; str < n; str++) {
    for (let i = 0; i < n; i++) {
      if (arr[str][i] !== arr[i][str]) {
        answer = "NO";
        break;
      }
    }
  }

  return answer;
};

console.log(sol(N, input));
