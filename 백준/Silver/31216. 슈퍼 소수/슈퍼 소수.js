// https://www.acmicpc.net/problem/31216

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();
const under30000 = 400000;

const sol = (target, arr) => {
  // 아이디어
  // 에라토스테네스의 체
  const prime = (num) => {
    const primelist = Array(num + 1)
      .fill(1)
      .fill(0, 0, 2);

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (primelist[i]) {
        for (let j = i ** 2; j <= num; j += i) {
          primelist[j] = 0;
        }
      }
    }

    return primelist;
  };

  const isPrime = prime(under30000);

  const list = [];
  for (let i = 0; i < under30000; i++) {
    if (isPrime[i]) list.push(i);
  }

  const answer = [];
  arr.forEach((val) => {
    answer.push(list[list[val - 1] - 1]);
  });

  return answer.join("\n");
};

console.log(sol(N, input));
