//https://www.acmicpc.net/problem/1747

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = Number(input.shift());
// 소수의 정의
// 나뉘는 수가 1과 자신 뿐인 수
// 에라토스테네스의 체 개념 필요
// 어떻게 했더라...?

// 2초 256 -> O(n**2)까지 테스트 가능
// N 최대치 1,000,000

/*
const prime = (num) => {
  const arr = [];
  for (let i = 0; i < num + 2; i++) {
    arr.push(true);
  }

  arr[0] = arr[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
};

console.log(prime(N)[N]);
*/

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const reverse = (num) => {
  const str = String(num);

  if (str.length % 2 === 0) {
    // console.log(
    //   str.slice(0, str.length / 2),
    //   str
    //     .slice(str.length / 2, str.length)
    //     .split("")
    //     .reverse()
    //     .join("")
    // );
    return str.slice(0, str.length / 2) ===
      str
        .slice(str.length / 2, str.length)
        .split("")
        .reverse()
        .join("")
      ? true
      : false;
  } else {
    // console.log(
    //   str.slice(0, str.length / 2),
    //   str
    //     .slice(str.length / 2 + 1, str.length)
    //     .split("")
    //     .reverse()
    //     .join("")
    // );
    return str.slice(0, str.length / 2) ===
      str
        .slice(str.length / 2 + 1, str.length)
        .split("")
        .reverse()
        .join("")
      ? true
      : false;
  }
};

// isPrime(N) ? console.log(reverse(N)) : null;

let i = N;
while (1) {
  if (isPrime(i)) {
    if (reverse(i)) {
      console.log(i);
      break;
    }
  }
  i++;
}
