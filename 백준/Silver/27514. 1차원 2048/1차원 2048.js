// https://www.acmicpc.net/problem/27514

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().split(splitPath);

// console.log(input);
const N = Number(input[0]);
const inputArray = input[1].split(" ").map(Number);

// console.log(N, inputArray);
// const set = new Set(Array);

// 아이디어
// 1. 중복 판별
// 중복은 합치고 뒤에 수를 0으로 보내버린다.

// 핵심 -> 큰 숫자를 파싱해야함
// Bigint?
// log를 사용하라는 힌트

function solution(numbers) {
  let arr = new Array(64).fill(0);

  // 지수형태로 변환
  numbers.forEach((n) => {
    if (n !== 0) {
      //   console.log(arr);
      let l = Math.floor(Math.log2(n));
      //   console.log(l);
      arr[l]++;
    }
  });

  // 지수형태로 변환된 것을 순회하면서 올림처리
  for (let i = 0; i < 63; i++) {
    arr[i + 1] += Math.floor(arr[i] / 2);
  }

  //   console.log(arr);

  // 제일 높은 값 찾기
  for (let i = 63; i >= 0; i--) {
    // console.log(arr);
    // console.log(i, arr[i]);
    if (arr[i] !== 0) {
      //   console.log(Math.pow(2, i));
      return BigInt(Math.pow(2, i)).toString();
    }
  }

  return 0;
}

console.log(solution(inputArray));
