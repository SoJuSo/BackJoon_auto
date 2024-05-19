const fs = require("fs");
// 플랫폼에 따라 입력 파일 경로를 설정
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
// 플랫폼에 따라 줄바꿈 문자 설정
const splitPath = process.platform === "linux" ? "\n" : "\r\n";

// 입력 파일을 읽고, 줄바꿈 문자로 나누어 배열로 저장
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input[0]); // 첫 번째 입력: N 값
const M = Number(input[1]); // 두 번째 입력: M 값
const S = input[2]; // 세 번째 입력: 문자열 S

// 해결 함수 정의
const sol = (num, len, str) => {
  let switchFlag = false; // IO 패턴이 시작됐는지 여부를 저장하는 플래그
  let count = 1; // 현재 연속된 문자 수를 저장
  let answer = 0; // 결과값을 저장
  // N에 따라 IOI 패턴 생성
  let P = "IO".repeat(num) + "I";

  // 문자열 S를 순회
  for (let i = 0; i < len; i++) {
    // switchFlag가 꺼져있고 현재 문자가 'I'인 경우
    if (!switchFlag && str[i] === "I") {
      switchFlag = true; // 플래그를 켠다
      // switchFlag가 켜져있고 현재 문자가 이전 문자와 다른 경우
    } else if (switchFlag && str[i] !== str[i - 1]) {
      count += 1; // count를 증가시킨다
    } else {
      // 현재 count가 P의 길이 이상인 경우
      if (count >= P.length) {
        // 가능한 패턴의 수를 answer에 더한다
        answer += Math.floor((count - P.length) / 2) + 1;
      }
      count = 1; // count를 초기화
      // 현재 문자가 'O'인 경우 switchFlag를 끈다
      if (str[i] === "O") switchFlag = false;
    }
  }

  // 마지막 부분에서 count가 P의 길이 이상인 경우
  if (count >= P.length) {
    // 가능한 패턴의 수를 answer에 더한다
    answer += Math.floor((count - P.length) / 2) + 1;
  }

  return answer; // 결과값 반환
};

console.log(sol(N, M, S)); // 결과 출력
