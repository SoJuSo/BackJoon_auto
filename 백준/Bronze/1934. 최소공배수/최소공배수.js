// https://www.acmicpc.net/problem/1934

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (pcs, list) => {
  // 아이디어
  const gcd = (n1, n2) => {
    return n2 ? gcd(n2, n1 % n2) : n1;
  };

  const answer = [];

  list.forEach((val) => {
    const [num1, num2] = val.split(" ").map(Number);
    answer.push((num1 * num2) / gcd(num1, num2));
  });
  return answer.join("\n");
};

console.log(sol(N, input));
