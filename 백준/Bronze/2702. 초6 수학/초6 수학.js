// https://www.acmicpc.net/problem/2702

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (target, arr) => {
  // 아이디어
  // 구현
  // lcm gcd
  const gcd = (num1, num2) => {
    return num2 ? gcd(num2, num1 % num2) : num1;
  };

  // console.log(gcd(n, m)); // gcd
  // console.log((n * m) / gcd(n, m)); // lcm

  const answer = [];
  arr.forEach((val) => {
    const [a, b] = val.split(" ").map(Number);
    answer.push(`${(a * b) / gcd(a, b)} ${gcd(a, b)}`);
  });

  return answer.join("\n");
};

console.log(sol(N, input));
