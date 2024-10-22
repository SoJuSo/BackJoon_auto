// https://www.acmicpc.net/problem/1193

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (num) => {
  // 아이디어
  // 대각선으로 변하는 규칙 이용
  let i = 1;
  while (num > i) {
    num -= i;
    i++;
    // console.log(num);
  }

  if (i % 2 === 1) {
    return i + 1 - num + "/" + num;
  } else {
    return num + "/" + (i + 1 - num);
  }
};

console.log(sol(+input.shift()));
