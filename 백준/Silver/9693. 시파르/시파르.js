// https://www.acmicpc.net/problem/9693

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

// 5의 배수 관련 메모이제이션 저장소
const dpFives = {};

// 주어진 숫자 i에 대해 5의 배수 개수를 재귀적으로 계산하는 함수
function getFives(i) {
  if (!(i in dpFives) && i % 5 === 0) {
    dpFives[i] = 1 + getFives(Math.floor(i / 5)); // 5로 나눈 후 재귀 호출
  }
  return dpFives[i] || 0; // 메모이제이션에서 값을 반환, 없으면 0
}

// 10의 배수 개수를 저장하는 배열
const dpTens = [0];

// 주어진 숫자 i에 대해 10의 배수 개수를 계산하는 함수
function getTens(i) {
  // dpTens 배열의 길이가 i보다 작으면 값을 계산하여 추가
  while (i >= dpTens.length) {
    const j = dpTens.length; // 현재 배열 길이
    dpTens[j] = dpTens[j - 1] + getFives(j); // 이전 값에 5의 배수 개수를 더함
  }
  return dpTens[i]; // i에 해당하는 10의 배수 개수를 반환
}

let index = 1;
// 입력을 계속 받아들이는 루프
while (true) {
  const i = parseInt(input.shift(), 10); // 입력값을 정수로 변환
  if (i === 0) {
    break; // 0이 입력되면 루프 종료
  }
  console.log(`Case #${index}: ${getTens(i)}`); // 결과 출력
  index++; // 케이스 번호 증가
}
