// https://www.acmicpc.net/problem/25551

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = ([
  [white_mask, black_mask],
  [white_shirt, black_shirt],
  [white_pants, black_pants],
]) => {
  // 아이디어
  // 경우의 수
  // 마스크 !== 티셔츠, 티셔츠 !== 바지, 마스크 === 바지
  // 단순 수학의 경우의 수 따지기에는 너무 어렵다, 그냥 전통적으로 수를 빼고 더해보자
  // 근데 시초가 난다, 즉 수학으로 해결해야한다.

  const white = Math.min(black_mask, white_shirt, black_pants);
  const black = Math.min(white_mask, black_shirt, white_pants);

  return Math.min(white, black + 1) + Math.min(white + 1, black);
};

console.log(sol(input.map((v) => v.split(" ").map(Number))));
