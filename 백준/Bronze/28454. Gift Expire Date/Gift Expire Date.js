// https://www.acmicpc.net/problem/28454

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const standard = input.shift();

const sol = (date, list) => {
  // 아이디어
  const n = +input.shift();
  const [년, 월, 일] = date.split("-").map(Number);
  return list.reduce((acc, cur) => {
    const [지년, 지월, 지일] = cur.split("-").map(Number);
    if (지년 > 년) {
      return acc + 1;
    } else if (지년 === 년 && 지월 > 월) {
      return acc + 1;
    } else if (지년 === 년 && 지월 === 월 && 지일 >= 일) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

console.log(sol(standard, input));
