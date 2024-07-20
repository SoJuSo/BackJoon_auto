// https://www.acmicpc.net/problem/1138

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input.shift().split(" ").map(Number);

const sol = (n, arr) => {
  const answer = Array(n).fill(0);
  for (let i = 1; i < n + 1; i++) {
    let tmp = arr[i - 1];
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (count === tmp && answer[j] === 0) {
        answer[j] = i;
        break;
      } else if (answer[j] === 0) {
        count += 1;
      }
    }
  }
  return answer.join(" ");
};

console.log(sol(N, list));
