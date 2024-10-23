// https://www.acmicpc.net/problem/1343

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "0_example.txt";
const splitPath = process.platform === "linux" ? "\n" : "\r\n";
let input = fs.readFileSync(filePath).toString().trim().split(splitPath);

const sol = (str) => {
  // 아이디어
  // 점점점..?
  const boardParser = (num) => {
    const A = "AAAA";
    const B = "BB";

    if (Math.floor(num / 4) >= 1 && num % 4 === 2) {
      return A.repeat(Math.floor(num / 4)) + B.repeat((num % 4) / 2);
    } else if (num % 4 === 0) {
      return A.repeat(Math.floor(num / 4));
    } else {
      return B.repeat((num % 4) / 2);
    }
  };

  const dividend = str.split(".");
  let answer = "";
  for (let i = 0; i < dividend.length; i++) {
    if (dividend[i].length % 2 !== 0) {
      return -1;
    }
    if (dividend[i].length) {
      answer += boardParser(dividend[i].length);
    }

    if (i !== dividend.length - 1) answer += ".";
  }
  return answer;
};

console.log(sol(input.shift()));
