// https://www.acmicpc.net/problem/2877

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = "\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (n) => {
  // 1 - 4
  // 2 - 7 - 2 ^ 1
  // 3 - 44
  // 4 - 47
  // 5 - 74
  // 6 - 77 2 ^ 2
  // 7 - 444
  // 8 - 447
  // 9 - 474
  // 10 - 477
  // 11 - 744
  // 12 - 747
  // 13 - 774
  // 14 - 777 2 ^ 3

  let num_of_digits = 1; // 출력하는 숫자의 자리수

  // K가 0보다 작거나 같을 때까지 반복
  while (true) {
    n -= Math.pow(2, num_of_digits); // 2의 num_of_digits 제곱을 K에서 빼기
    if (n <= 0) {
      n += Math.pow(2, num_of_digits); // K가 0 이하가 되면 다시 더함
      break; // 반복 종료
    }
    num_of_digits++; // 자리수 증가
  }

  n -= 1; // K를 1 감소시킴
  // K를 이진수로 변환하고 자리수를 맞춘 후, 0을 4로, 1을 7로 변환
  const result = n.toString(2).padStart(num_of_digits, "0").replaceAll("0", "4").replaceAll("1", "7");

  return result; // 결과 반환
};

console.log(sol(N));
