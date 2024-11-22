// https://www.acmicpc.net/problem/25704

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (coupon, price) => {
  // 아이디어
  if (coupon < 5) return price;
  if (coupon < 10) return price - 500;
  if (coupon < 15) return Math.min(price - 500, price * 0.9);
  if (coupon < 20) return Math.min(price - 500, price * 0.9, price - 2000);
  return Math.min(price - 500, price * 0.9, price - 2000, price * 0.75);
};

console.log(sol(N, +input[0]) < 0 ? 0 : sol(N, +input[0]));
