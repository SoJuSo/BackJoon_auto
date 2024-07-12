// https://www.acmicpc.net/problem/1931

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 백트래킹? 그리디?

const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));
const sol = (n, arr) => {
  let answer = 0;
  let prev = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i][0] >= prev) {
      answer++;
      prev = arr[i][1];
    }
  }
  return answer;
};

console.log(
  sol(
    N,
    list.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else return a[1] - b[1];
    })
  )
);
