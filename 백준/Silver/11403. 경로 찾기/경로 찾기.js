// https://www.acmicpc.net/problem/11403

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 1초
// 메모리 적당
// 플로이드 워셜 알고리즘
// 간접 경로 계산도 해야하기에 플로이드 워셜이 적합

const N = +input.shift(); // n = 정점의 개수
const list = input.map((v) => v.split(" ").map(Number));

const sol = (n, arr) => {
  // 플로이드 워셜 알고리즘 구현
  for (let i = 0; i < n; i++) {
    // 중간 정점
    for (let j = 0; j < n; j++) {
      // 시작 정점
      for (let k = 0; k < n; k++) {
        // 도착 정점
        // j에서 i를 거쳐 k로 가는 경로가 있다면
        if (arr[j][i] && arr[i][k]) {
          arr[j][k] = 1; // j에서 k로 가는 경로가 있음을 표시
        }
      }
    }
  }

  return arr.map((v) => v.join(" ")).join("\n");
};

console.log(sol(N, list));
