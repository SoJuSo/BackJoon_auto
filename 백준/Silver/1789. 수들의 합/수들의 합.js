// https://www.acmicpc.net/problem/1789

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  // 구현
  // set으로 중복되는 순간 멈추기
  // 메모리 초과
  // 메모리 사용하면 안됌
  // 그럼 set이 아니라 start가 현재 값보다 더 커진 경우 break

  let start = 1;
  while (1) {
    // console.log(start, num);
    if (start >= num - start) {
      break;
    } else {
      num -= start;
      start++;
    }
  }

  return start;
};

console.log(sol(N));
