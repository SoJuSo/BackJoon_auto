// https://www.acmicpc.net/problem/10995

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const N = +input.shift();

const sol = (num) => {
  // 아이디어
  // 별을 찍어라
  const str = "* ".repeat(num);
  const reversal = str.split("").reverse().join("");

  const answer = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      answer.push(str);
    } else {
      answer.push(reversal);
    }
  }

  return answer.join("\n");
};

console.log(sol(N));
