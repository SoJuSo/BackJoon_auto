// https://www.acmicpc.net/problem/31797

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 1초

const [N, M] = input.shift().split(" ").map(Number); // n = 아파트 층 수, m = 참가자 수
const list = input.map((v) => v.split(" ").map(Number)); // [h1,h2]

const sol = (n, m, arr) => {
  const answer = [];
  for (let i = 0; i < m; i++) {
    arr[i].forEach((v) => answer.push([v, i + 1]));
  }
  const cur = answer.sort((a, b) => a[0] - b[0]);

  if (n > cur.length) {
    return cur[(n - 1) % cur.length][1];
  } else {
    return cur[n - 1][1];
  }
};

console.log(sol(N, M, list));
