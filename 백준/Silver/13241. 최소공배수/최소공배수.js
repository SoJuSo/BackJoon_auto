// https://www.acmicpc.net/problem/13241

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([A, B]) => {
  // 아이디어
  // gcd,lcm 구현 후 lcm
  const gcd = (num1, num2) => {
    return num2 ? gcd(num2, num1 % num2) : num1;
  };

  return String((A * B) / gcd(A, B));
};

console.log(
  sol(
    input
      .shift()
      .split(" ")
      .map((v) => BigInt(v))
  )
);
