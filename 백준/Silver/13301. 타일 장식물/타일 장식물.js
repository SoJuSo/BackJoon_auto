// https://www.acmicpc.net/problem/13301
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  // 이거완전...피보나치 + DP

  const fibo = (n) => {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }

    return result[n];
  };

  const long = fibo(num + 1);
  const short = fibo(num);
  return (long + short) * 2;
};

console.log(sol(+input.shift()));
