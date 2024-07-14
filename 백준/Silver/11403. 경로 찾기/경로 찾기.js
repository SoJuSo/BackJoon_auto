// https://www.acmicpc.net/problem/11403

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 1초
// 메모리 적당
// 플로이드 워셜 알고리즘

const N = +input.shift(); // n = 정점의 개수
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[j][i] && arr[i][k]) {
          arr[j][k] = 1;
        }
      }
    }
  }

  return arr.map((v) => v.join(" ")).join("\n");
};

console.log(sol(N, list));
