// https://www.acmicpc.net/problem/28110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const list = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const sol = (n, arr) => {
  let answer = 0; // 최종 결과를 저장할 변수
  let x = 0; // 최소 거리 변수 초기화

  // 배열을 순회하며 중간 값을 찾음
  for (let i = 0; i < n - 1; i++) {
    // 현재 두 수의 중간값을 계산
    let target = Math.floor((arr[i] + arr[i + 1]) / 2);

    // 중간값이 현재 수와 다를 경우
    if (target !== arr[i]) {
      // 중간값과 두 수의 거리 중 최소값을 비교
      let distance = Math.min(target - arr[i], arr[i + 1] - target);

      if (distance > x) {
        answer = target; // 최종 결과 업데이트
        x = distance; // 최소 거리 업데이트
      }
    }
  }

  // 결과 출력
  if (answer === 0) {
    return -1; // 조건에 맞는 값이 없을 경우 -1 출력
  } else {
    return answer; // 최종 중간값 출력
  }
};

console.log(sol(N, list));
