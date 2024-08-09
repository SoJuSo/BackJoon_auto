// https://www.acmicpc.net/problem/27446

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const [N, M] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);

const sol = (n, m, arr) => {
  const needPrint = [];

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      needPrint.push(i);
    }
  }

  let last = 0; // 가장 최근 목격한 잃어버린 페이지 번호
  let result = 0; // 사용한 잉크

  for (const i of needPrint) {
    if (last) {
      result += Math.min(7, (i - last) * 2); // 잉크 계산
    } else {
      result += 7; // 완전히 새롭게 인쇄해야 함
    }
    last = i; // 최근 목격한 페이지 번호 업데이트
  }

  return result;
};

console.log(sol(N, M, list));
