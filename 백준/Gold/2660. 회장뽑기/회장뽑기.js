// https://www.acmicpc.net/problem/2660

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
input.pop();
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  const answer = Array.from({ length: n }, () => Array(n).fill(n));
  const dist = Array(n).fill(0);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) answer[i][j] = 0;
    }
  }
  arr.forEach((node) => {
    const [a, b] = node;
    answer[a - 1][b - 1] = 1;
    answer[b - 1][a - 1] = 1;
  });

  for (let k = 0; k < n; k += 1) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        answer[i][j] = Math.min(answer[i][j], answer[i][k] + answer[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i += 1) dist[i] = Math.max(...answer[i]);
  const t = Math.min(...dist);
  const result = [[t, 0], []];
  for (let i = 0; i < n; i += 1) {
    if (dist[i] == t) {
      result[0][1] += 1;
      result[1].push(i + 1);
    }
  }
  return result.map((sub) => sub.join(" ")).join("\n");
};

console.log(sol(N, list));
